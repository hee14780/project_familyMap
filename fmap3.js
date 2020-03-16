// define the tree-item component
// Vue.component("tree-item", {
//     template: "#item-template",
//     props: {
//         item: Object
//     },
//     data: function () {
//         return {
//             isShowLifeTime: false,
//             jogbo_img: ""
//         };
//     },
//     methods: {
//         // 일생(?) 컨텐츠 토글
//         toggle: function (item) {
//             this.isShowLifeTime = this.isShowLifeTime ? false : true;

//             let img_path = "http://jogboapi.appmowa.com/source/" + item.pa + item.page + ".png";
//             console.log(img_path);
//             this.jogbo_img = img_path;
//             $(".connect_area").hide();
//         }
//     }
// });

// boot up the family
var family = new Vue({
    el: "#familyWrap",
    data: () => {
        return {
            originData: {
                0: [],
                1: []
            },
            showFamilyMap: 0,
            parentSesu: 0,
            selectedParent: "",
            selectedChildren: [],
            selectObject: [],
            objStart: 0,
            objLimit: 20

        };
    },
    created: function () { },
    mounted: function () { },
    methods: {
        async serach() {
            this.objStart = 0;
            this.originData[0] = [];
            this.originData[1] = [];
            this.selectObject = [];
            let url = "http://jogboapi.appmowa.com/jogbo_join_list.php";

            let form = new FormData();
            form.append("sesu", this.parentSesu);
            form.append("limit", `${this.objStart}, ${this.objLimit}`);

            await axios.post(url, form).then(res => {
                let familyData = res.data;
                if (res.data) {
                    familyData.forEach(data => {
                        let name;
                        if (!data.option) {
                            name = "미등록";
                        } else {
                            name = data.option[0];
                        }

                        let sex = data.sex == "남" ? 0 : 1;

                        this.originData[0].push({
                            no: data.no,
                            parent: null,
                            pa: data.pa,
                            page: data.page,
                            sesu: data.sesu,
                            seq: data.seq,
                            sex: sex,
                            name: name,
                            marginRight: 0
                        });
                    });
                } else {
                    alert(this.parentSesu + "가 없습니다.");
                    return;
                }
            });

            if (this.originData[0].length == 0) {
                return;
            }

            console.log(this.parentSesu + 1);

            let form2 = new FormData();
            form2.append("sesu", parseInt(this.parentSesu) + 1);
            form2.append("limit", `${this.objStart}, ${this.objLimit}`);

            await axios.post(url, form2).then(res => {
                let familyData = res.data;
                if (res.data) {
                    familyData.forEach(data => {
                        let name;
                        if (!data.option) {
                            name = "미등록";
                        } else {
                            name = data.option[0];
                        }

                        let parent = data.parent == 0 ? null : data.parent;
                        let sex = data.sex == "남" ? 0 : 1;

                        this.originData[1].push({
                            no: data.no,
                            parent: parent,
                            pa: data.pa,
                            page: data.page,
                            sesu: data.sesu,
                            seq: data.seq,
                            sex: sex,
                            name: name,
                            marginRight: 0
                        });
                    });
                }
            });

            await this.getFamilyMap2();
        },

        getFamilyMap2() {
            this.showFamilyMap = 1;

            for (let i = 0; i <= 1; i++) {
                this.originData[i].forEach(person => {
                    person.tempSort = 0;

                    if (i == 0) {
                        let myChildren = this.originData[1].filter(children => {
                            return children.parent == person.no && children.parent != null;
                        });

                        person.marginRight = myChildren.length - 1;
                    }

                    let myIndex = 0;

                    if (i == 1) {
                        myIndex = this.originData[1].findIndex(my => my.no == person.no);

                        if (person.parent != null) {
                            let parentIndex = this.originData[0].findIndex(perant => perant.no == person.parent);
                            person.tempSort = parentIndex;
                        } else {
                            let temp = 0;

                            for (let j = myIndex; j < this.originData[0].length; j++) {
                                let findChildren = this.originData[1].findIndex(
                                    obj => obj.parent == this.originData[0][j].no
                                );

                                if (findChildren == -1) {
                                    temp = j;
                                    break;
                                }
                            }
                            person.tempSort = myIndex + temp;
                        }
                    }

                    // 왼쪽 간격 맞추기
                    // Step1 > 나의 인덱스가 0인가 / 내가 첫째인가
                    if (person.parent != null) {
                        person.firstchildren = 0;
                        person.lastChildren = 0;

                        // 내가 첫째인지 확인
                        let myBro = this.originData[1].filter(bro => {
                            return bro.parent == person.parent && bro.no < person.no;
                        });

                        // 내가 막내인지 확인
                        let myBro2 = this.originData[1].filter(bro => {
                            return bro.parent == person.parent && bro.no > person.no;
                        });

                        let myBroCount = myBro.length;
                        // 내가 첫째라는 소리
                        if (myIndex == 0 || myBroCount == 0) {
                            person.firstchildren = 1;
                        }

                        if (myBro2.length == 0) {
                            person.lastChildren = 1;
                        }
                    }

                    setTimeout(() => {
                        if (person.parent != null) {
                            $("#name_" + person.no).addClass("existParent");
                            $("#name_" + person.parent).addClass("existChildren");
                            $("#name_" + person.no).addClass("parentNo_" + person.parent);
                        }

                        if (person.lastChildren == 1) {
                            $("#name_" + person.no).addClass("lastChildren");
                        }

                        this.selectObject.forEach(obj => {
                            $("#name_" + obj)
                                .children()
                                .children()
                                .children(".member-info")
                                .children()
                                .css("background-color", "pink");
                        });
                    }, 50);
                }); // foreach

                this.originData[i].sort((child1, child2) => {
                    if (child1.tempSort == child2.tempSort) {
                        if (child2.parent == child1.parent) {
                            return child1.seq - child2.seq;
                        } else {
                            return child2.parent - child1.parent;
                        }
                    }

                    return child1.tempSort - child2.tempSort;
                });

                // 왼쪽 정렬
                let firstChildrenArray = this.originData[i].filter(child => {
                    return child.firstchildren == 1;
                });

                firstChildrenArray.forEach(child => {
                    console.log(child.no);

                    setTimeout(() => {
                        let parentElementLeft = $("#name_" + child.parent).offset().left;
                        let myElementLeft = $("#name_" + child.no).offset().left;

                        if (myElementLeft < parentElementLeft) {
                            $("#name_" + child.no).css("margin-left", parentElementLeft - myElementLeft + "px");
                        }

                        this.$refs.treeWrap.addEventListener("scroll", this.handleScroll); //가로 스크롤 동작

                        this.$refs.treeWrap.addEventListener("mousewheel", this.handleWheel); //마우스휠 동작

                        // $(".fake_scroll .bar").css("top", "25%"); //세로 스크롤 위치 초기화
                    }, 50);
                });
            } // for

            setTimeout(() => {
                console.log(this.originData);
            }, 1000);
        },

        reset() {
            let temp = this.originData;
            this.originData = {};
            this.originData = temp;
            this.getFamilyMap2();
        },

        disconnect() {
            this.selectObject = [];
            $(".child-member")
                .children()
                .children()
                .children(".member-info")
                .children()
                .css("background-color", "#FFFFFF");
            this.selectObject.push(this.selectedParent);

            let findChildren = this.originData[1].filter(obj => {
                return obj.parent == this.selectedParent;
            });

            let url = "http://jogboapi.appmowa.com/jogbo_parent_set.php";

            findChildren.forEach(obj => {
                let findIndex = this.originData[1].findIndex(object => object.no == obj.no);

                this.originData[1][findIndex].parent = null;
                this.selectObject.push(obj.no);

                let form = new FormData()
                form.append('no', obj.no);
                form.append('chk', "1");

                axios.post(url, form);

            });

            $(".child-member").removeClass("existParent");
            $(".child-member").removeClass("existChildren");
            $(".child-member").removeClass("firstChildren");
            $(".child-member").removeClass("lastChildren");
            $(".child-member").css("margin-left", "0px");
            $(".conn")
                .children()
                .hide();
            this.selectedParent = "";
            this.selectedChildren = [];

            this.originData[1].sort((child1, child2) => {
                return child1.seq - child2.seq;
            });

            this.getFamilyMap2();
        },

        connect() {
            this.selectObject = [];

            $(".child-member")
                .children()
                .children()
                .children(".member-info")
                .children()
                .css("background-color", "#FFFFFF");
            this.selectObject.push(this.selectedParent);

            let url = "http://jogboapi.appmowa.com/jogbo_parent_set.php";

            this.selectedChildren.forEach(child => {
                let chkIndex = this.originData[1].findIndex(obj => obj.no == child);

                this.originData[1][chkIndex].parent = this.selectedParent;
                this.selectObject.push(child);

                let form = new FormData()
                form.append('no', child);
                form.append('parent', this.selectedParent);
                form.append('chk', "1");
                axios.post(url, form);

            });

            setTimeout(() => {
                $(".child-member").removeClass("existParent");
                $(".child-member").removeClass("existChildren");
                $(".child-member").removeClass("firstChildren");
                $(".child-member").removeClass("lastChildren");
                $(".child-member").css("margin-left", "0px");
                $(".conn")
                    .children()
                    .hide();
                this.selectedParent = "";
                this.selectedChildren = [];
                this.getFamilyMap2();
            }, 500);
        },

        selectePerson(person) {
            // 0번째 배열에 속해 있는지 여부
            let checkIndex = this.originData[0].findIndex(obj => obj.no == person.no);

            if (checkIndex != -1) {
                if (this.selectedParent == "") {
                    this.selectedParent = person.no;
                    $("#name_" + person.no)
                        .children()
                        .children()
                        .children(".member-info")
                        .children()
                        .css("background-color", "#eaeaea");
                } else {
                    $(".conn_" + this.selectedParent)
                        .children()
                        .hide();

                    $("#name_" + this.selectedParent)
                        .children()
                        .children()
                        .children(".member-info")
                        .children()
                        .css("background-color", "#FFFFFF");
                    $("#name_" + person.no)
                        .children()
                        .children()
                        .children(".member-info")
                        .children()
                        .css("background-color", "#eaeaea");
                    this.selectedParent = person.no;
                }
            } else {
                let checkExistChildren = this.selectedChildren.indexOf(person.no);

                console.log(checkExistChildren);

                if (checkExistChildren == -1) {
                    $("#name_" + person.no)
                        .children()
                        .children()
                        .children(".member-info")
                        .children()
                        .css("background-color", "#eaeaea");
                    this.selectedChildren.push(person.no);
                } else {
                    $("#name_" + person.no)
                        .children()
                        .children()
                        .children(".member-info")
                        .children()
                        .css("background-color", "#FFFFFF");
                    this.selectedChildren.splice(checkExistChildren, 1);

                    console.log(this.selectedChildren);
                }
            }

            if (this.selectedParent && this.selectedChildren.length >= 1) {
                $(".conn_" + this.selectedParent)
                    .children()
                    .show();
            }

            if (this.selectedParent) {
                let check = this.originData[1].findIndex(obj => obj.parent == this.selectedParent);
                if (check != -1) {
                    $(".conn_" + this.selectedParent)
                        .children(".disconnectBtn")
                        .show();
                }
            }
        },

        //가로스크롤 동작
        handleScroll(event) {
            let getScrollWidth = this.$refs.treeWrap.scrollWidth;
            let getScrollLeft = this.$refs.treeWrap.scrollLeft - 20; //세로스크롤 넓이만큼 길이 줄임
            let getScrollEnd = getScrollWidth - window.innerWidth;

            // console.log("scrollWidth", getScrollWidth, getScrollEnd, getScrollLeft);

            if (getScrollLeft === getScrollEnd) {


                this.objStart = this.objStart + 20;

                let url = "http://jogboapi.appmowa.com/jogbo_join_list.php";

                let form = new FormData();
                form.append("sesu", this.parentSesu);
                form.append("limit", `${this.objStart}, ${this.objLimit}`);

                let addArray0 = [];
                let addArray1 = [];

                axios.post(url, form).then(res => {
                    let familyData = res.data;
                    if (res.data) {
                        familyData.forEach(data => {
                            let name;
                            if (!data.option) {
                                name = "미등록";
                            } else {
                                name = "미등록";
                            }

                            let sex = data.sex == "남" ? 0 : 1;

                            addArray0.push({
                                no: data.no,
                                parent: null,
                                pa: data.pa,
                                page: data.page,
                                sesu: data.sesu,
                                seq: data.seq,
                                sex: sex,
                                name: name,
                                marginRight: 0
                            });
                        });
                    } else {
                        alert(this.parentSesu + "가 없습니다.");
                        return;
                    }
                }).then(() => {

                    let temp = this.originData[0].concat(addArray0);
                    this.originData[0] = temp;

                });


                let form2 = new FormData();
                form2.append("sesu", parseInt(this.parentSesu) + 1);
                form2.append("limit", `${this.objStart}, ${this.objLimit}`);

                axios.post(url, form2).then(res => {
                    let familyData = res.data;
                    if (res.data) {
                        familyData.forEach(data => {
                            let name;
                            if (!data.option) {
                                name = "미등록";
                            } else {
                                name = "미등록";
                            }

                            let parent = data.parent == 0 ? null : data.parent;
                            let sex = data.sex == "남" ? 0 : 1;

                            addArray1.push({
                                no: data.no,
                                parent: parent,
                                pa: data.pa,
                                page: data.page,
                                sesu: data.sesu,
                                seq: data.seq,
                                sex: sex,
                                name: name,
                                marginRight: 0
                            });
                        });
                    }
                }).then(() => {

                    let temp = this.originData[1].concat(addArray1);
                    this.originData[1] = temp;

                });




            }
        },

        //세로 마우스휠 동작
        // handleWheel(event) {
        //     let scrollBar = $(".fake_scroll .bar");

        //     if (event.wheelDelta >= 0) {
        //         console.log("+", event);
        //         scrollBar.animate(
        //             {
        //                 top: "0%"
        //             },
        //             500,
        //             function () {
        //                 alert("스크롤이 상단으로 이동됬어요!");
        //                 scrollBar.css("top", 25 + "%");
        //             }
        //         );
        //     } else {
        //         console.log("-", event);
        //         scrollBar.animate(
        //             {
        //                 top: "50%"
        //             },
        //             500,
        //             function () {
        //                 alert("스크롤이 하단으로 이동됬어요!");
        //                 scrollBar.css("top", 25 + "%");
        //             }
        //         );
        //     }
        // }
    }
});
