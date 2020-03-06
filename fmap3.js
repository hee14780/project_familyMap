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
                0: [
                    {
                        no: 11, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 0, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 12, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 0, //세수
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안",
                        marginRight: 0
                    },
                    {
                        no: 13, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 0, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준",
                        marginRight: 0
                    },
                    {
                        no: 14, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 0, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준",
                        marginRight: 0
                    }
                ],
                1: [
                    {
                        no: 21, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 14, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 22, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 11, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안",
                        marginRight: 0
                    },
                    {
                        no: 23, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준",
                        marginRight: 0
                    },
                    {
                        no: 24, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 12, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준",
                        marginRight: 0
                    }
                ],
                2: [
                    {
                        no: 31, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 24, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 32, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 24, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안",
                        marginRight: 0
                    },
                    {
                        no: 33, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 24, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준",
                        marginRight: 0
                    },
                    {
                        no: 34, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준",
                        marginRight: 0
                    }
                ],
                3: [
                    {
                        no: 41, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        marginRight: 0 //일생
                    },
                    {
                        no: 42, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 34, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 2, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        marginRight: 0
                    },
                    {
                        no: 43, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        marginRight: 0
                    },
                    {
                        no: 44, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 33, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        marginRight: 0
                    },
                    {
                        no: 45, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 5, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"],
                        marginRight: 0 //일생
                    },
                    {
                        no: 46, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 6, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 47, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 7, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 48, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 8, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 49, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 9, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"],
                        marginRight: 0 //일생
                    },
                    {
                        no: 50, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 10, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 51, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 11, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 52, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 12, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 53, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 13, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"],
                        marginRight: 0 //일생
                    },
                    {
                        no: 54, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 14, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 55, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 15, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 56, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 16, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 57, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 17, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"],
                        marginRight: 0 //일생
                    },
                    {
                        no: 58, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 18, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 59, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 19, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 60, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 3, //세수
                        seq: 61, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    }
                ]
            },
            showFamilyMap: 0,
            myFamilyCount: [],
            startSesu: 0,
            endSesu: 3,
            targetParent: 0,
            targetParentSesu: 0,
            targetChildren: []

        };
    },
    created: function () { },
    methods: {

        getFamilyMap2() {

            this.showFamilyMap = 1;

            for (let i = this.endSesu; i >= this.startSesu; i--) {

                this.originData[i].forEach(person => {

                    person.tempSort = 0;

                    let nextIndex = person.sesu + 1;
                    let prevIndex = person.sesu - 1;
                    let parentIndex;
                    let myIndex;

                    // 트리 간격 맞추기
                    if (this.originData[nextIndex]) {

                        let myChildren = this.originData[nextIndex].filter(children => {
                            return children.parent == person.no && children.parent != null;
                        });

                        if (myChildren.length > 0) {
                            person.marginRight = person.marginRight + myChildren.length - 1;
                        } else {
                            person.marginRight = person.marginRight + 0;
                        }

                        if (this.originData[prevIndex] && person.parent != null) {
                            parentIndex = this.originData[prevIndex].findIndex(perant => perant.no == person.parent);
                            this.originData[prevIndex][parentIndex].marginRight = this.originData[prevIndex][parentIndex].marginRight + person.marginRight;
                        }

                    }

                }); // foreach

            } // for



            for (let i = this.startSesu; i <= this.endSesu; i++) {

                this.originData[i].forEach(person => {

                    person.tempSort = 0;

                    let nextIndex = person.sesu + 1;
                    let prevIndex = person.sesu - 1;
                    let parentIndex;
                    let myIndex;

                    if (this.originData[prevIndex]) {

                        myIndex = this.originData[i].findIndex(my => my.no == person.no);

                        if (person.parent != null) {
                            parentIndex = this.originData[prevIndex].findIndex(perant => perant.no == person.parent);
                            person.tempSort = parentIndex;
                        } else {
                            person.tempSort = myIndex + 1;
                        }

                    }


                    // 왼쪽 간격 맞추기
                    // Step1 > 나의 인덱스가 0인가 / 내가 첫째인가
                    if (person.parent != null && this.originData[prevIndex]) {

                        person.firstchildren = "";
                        person.lastChildren = "";

                        // 내가 첫째인지 확인
                        let myBro = this.originData[i].filter(bro => {
                            return bro.parent == person.parent && bro.seq < person.seq;
                        });

                        // 내가 막내인지 확인
                        let myBro2 = this.originData[i].filter(bro => {
                            return bro.parent == person.parent && bro.seq > person.seq;
                        })

                        // console.log(person.no);
                        // console.log(myBro2.length);
                        // console.log("++++++++++++");


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

                            $("#name_" + person.no).addClass('existParent');
                            $("#name_" + person.parent).addClass('existChildren');
                            $("#name_" + person.no).addClass('parentNo_' + person.parent);

                        }

                        if (person.lastChildren == 1) {

                            $("#name_" + person.no).addClass('lastChildren');

                        }

                    }, 100);

                }); // foreach

                this.originData[i].sort((child1, child2) => {
                    return child1.tempSort - child2.tempSort
                });

                // 왼쪽 정렬
                let firstChildrenArray = this.originData[i].filter(child => {
                    return child.firstchildren == 1;
                });

                firstChildrenArray.forEach(child => {

                    setTimeout(() => {

                        let parentElementLeft = $("#name_" + child.parent).offset().left;
                        let myElementLeft = $("#name_" + child.no).offset().left;

                        if (myElementLeft < parentElementLeft) {

                            $("#name_" + child.no).css("margin-left", parentElementLeft - myElementLeft + "px");

                            console.log(child.no);
                            console.log("부모위치 => " + parentElementLeft);
                            console.log("자식위치 => " + myElementLeft);
                            console.log("==============");

                        }

                    }, 100);

                });

            } // for

            setTimeout(() => {
                console.log(this.originData);
            }, 1000);

        },

        selectePerson(person) {

            if (this.targetParent == 0) {

                let myLeft = $("#name_" + person.no).children().children().children('.member-info').offset().left + 50;
                let myTop = $("#name_" + person.no).children().children().children('.member-info').offset().top;

                $(".moreInfo").css("left", myLeft).css("top", myTop);
                $(".moreInfo").show();

                this.targetParent = person.no;
                this.targetParentSesu = person.sesu;

                $("#name_" + person.no).children().children().children('.member-info').css('border', '1px solid black');
                $("#name_" + person.no).children().children().children('.member-info').children().css("background-color", "#eaeaea");

                let next_tree = person.sesu + 1;
                $("#tree_" + next_tree).addClass("rowScroll");
                $("#tree_" + person.sesu).addClass("selectedParent");

                console.log(this.targetParent);

            }


            if (this.targetParent != person.no) {

                if (person.sesu == this.targetParentSesu + 1) {

                    $("#name_" + person.no).children().children().children('.member-info').css('border', '1px solid red');
                    $("#name_" + person.no).children().children().children('.member-info').children().css("background-color", "pink");

                    this.targetChildren.push(person.no);

                    console.log(this.targetChildren);


                } else {

                    alert("부모 - 자녀 연결이 불가합니다.");

                }

            }

        },

        getFamilyMap() {

            for (let i = this.startSesu; i <= this.endSesu; i++) {


                this.originData[i].forEach(person => {

                    let nextIndex = person.sesu + 1;
                    let prevIndex = person.sesu - 1;
                    let parentIndex;

                    // 초기 설정
                    person.marginRight = 0;

                    // 만약 부모가 있다면
                    if (this.originData[prevIndex] && person.parent != null) {

                        // 내 부모의 인덱스와 나의 인덱스
                        parentIndex = this.originData[prevIndex].findIndex(perant => perant.no == person.parent);
                        let myIndex = this.originData[i].findIndex(my => my.no == person.no);

                        // 내 형제가 있나
                        let checkMyBro = this.originData[i].filter(bro => {

                            return bro.parent == person.parent && bro.seq < person.seq;

                        });

                        // 사촌이 있나
                        let checkMyCousin = this.originData[i].filter(cousin => {

                            return cousin.parent < person.parent && cousin.parent != null;

                        });
                        let checkMyCousinLength = checkMyCousin.length > 0 ? checkMyCousin.length - 1 : 0;


                        // 형제, 사촌 고려하여 스위칭 할 대상 선정 (인덱스가 < 0 || 인덱스 > Array.length 방지)
                        let targetIndex = 0;

                        if (parentIndex + checkMyBro.length + checkMyCousinLength < 0) {

                            targetIndex = 0;

                        } else {

                            if (parentIndex + checkMyBro.length + checkMyCousinLength < this.originData[i].length) {

                                targetIndex = parentIndex + checkMyBro.length + checkMyCousinLength;

                            } else {

                                targetIndex = this.originData[i].length - 1;

                            }

                        }


                        let targetPesson = this.originData[i][targetIndex];

                        console.log(person.no);
                        console.log("부모 => " + parentIndex);
                        console.log("형제 => " + checkMyBro.length);
                        console.log("사촌 => " + checkMyCousin.length);
                        console.log(targetIndex);
                        console.log("-------------------");

                        // 스위칭
                        this.originData[i][myIndex] = targetPesson;
                        this.originData[i][targetIndex] = person;

                    }


                    // 내 아래 세대가 있다면
                    // if (this.originData[nextIndex]) {

                    //     // 아들을 검색
                    //     let myChildren = this.originData[nextIndex].filter(children => {

                    //         return children.parent == person.no && children.parent != null;

                    //     });

                    //     if (myChildren.length > 0) {
                    //         // 니의 marginRight 설정
                    //         person.marginRight = myChildren.length - 1;

                    //         // 부모가 있다면 부모의 marginRight 에 나의 marginRight 를 더함
                    //         if (this.originData[prevIndex] && person.parent != null) {

                    //             this.originData[prevIndex][parentIndex].marginRight = this.originData[prevIndex][parentIndex].marginRight + person.marginRight;

                    //         }


                    //     } else {

                    //         person.marginRight = 0;

                    //     }


                    // }







                    // let nextIndex = i + 1;
                    // let checkMyChildren = 0;
                    // let checkParentIndex = 0;
                    // let checkMyIndex = 0;
                    // person.childrenCount = 0;
                    // // 자식 카운트 넣기
                    // if (this.originData[nextIndex]) {

                    //     checkMyChildren = this.checkChildren(person);
                    //     if (checkMyChildren >= 1) {
                    //         person.childrenCount = checkMyChildren;
                    //         person.marginRight = 10;
                    //     }

                    //     if (checkMyChildren >= 2) {
                    //         person.marginRight = (checkMyChildren - 1) * 50 + (checkMyChildren * 10);
                    //     } else {
                    //         person.marginRight = 10;
                    //     }

                    // } else {
                    //     person.marginRight = 10;
                    // }

                    // // 부모의 인덱스가 몇번인지
                    // let parentArrayIndex = i - 1;
                    // if (this.originData[parentArrayIndex]) {

                    //     checkParentIndex = this.originData[parentArrayIndex].findIndex(obj => obj.no == person.parent);
                    //     checkMyIndex = this.originData[i].findIndex(obj => obj.no == person.no);

                    //     if (checkParentIndex == -1) {
                    //         person.parentIndex = 0;
                    //         person.parentIndex = this.originData[i].length;

                    //         // 정렬 값
                    //         person.tempIndex = checkMyIndex;

                    //     } else {

                    //         let myMarginRihgt = person.marginRight;
                    //         let myParentMarginRight = this.originData[parentArrayIndex][checkParentIndex].marginRight;

                    //         if (myMarginRihgt > myParentMarginRight) {
                    //             this.originData[parentArrayIndex][checkParentIndex].marginRight = myMarginRihgt;
                    //         }

                    //         person.parentIndex = checkParentIndex;

                    //         // 정렬 값
                    //         person.tempIndex = person.parentIndex;
                    //     }

                    // } else {
                    //     checkMyIndex = this.originData[i].findIndex(obj => obj.no == person.no);
                    // }

                    // console.log(person.no);
                    // console.log("부모 인덱스 ==> " + checkParentIndex);
                    // console.log("나의 인덱스 ==> " + checkMyIndex);
                    // console.log("나의 seq ==> " + person.seq);
                    // console.log(person.tempIndex);
                    // console.log("===============");

                    // // // tempIndex 가 같으면 parent 가 우선
                    // this.originData[i].sort((a, b) => {

                    //     if (a.tempIndex == b.tempIndex) {
                    //         return a.parentIndex - b.parentIndex;
                    //     }

                    //     return a.tempIndex - b.tempIndex;

                    // });

                });

            }

            setTimeout(() => {
                console.log(this.originData);
                this.showFamilyMap = 1;
            }, 1000);
        },

        setMarginLeft() {

            for (let i = this.startSesu; i <= this.endSesu; i++) {

                this.originData[i].forEach(person => {

                    let nextIndex = i + 1;
                    let parentArrayIndex = i - 1;
                    if (this.originData[parentArrayIndex]) {

                        let checkMyIndex = this.originData[i].findIndex(obj => obj.no == person.no);
                        let checkParentIndex = this.originData[parentArrayIndex].findIndex(obj => obj.no == person.parent);

                        let checkBro = this.originData[i].filter(obj => {
                            return obj.parent == person.parent && obj.parent != null && obj.seq < person.seq
                        });

                        if (person.parent != null && checkMyIndex != checkParentIndex && !checkBro[0] && checkMyIndex == 0) {
                            person.marginLeft = checkParentIndex * 50 + (checkParentIndex * 10);
                        }

                    }

                    if (this.originData[nextIndex]) {

                        let myChildren = this.originData[nextIndex].filter(val => {

                            return val.parent == person.no;

                        });

                        if (myChildren.length != 0) {

                            let myChildrenNo = myChildren[0];
                            let findMyChildrenIndex = this.originData[nextIndex].findIndex(obj => obj.no == myChildrenNo.no);

                            let prevFindMyChildrenIndex = findMyChildrenIndex - 1;

                            if (prevFindMyChildrenIndex > 0) {

                                let myChildrenPrevNodeMarginRigth = this.originData[nextIndex][prevFindMyChildrenIndex].marginRight;

                                if (myChildrenPrevNodeMarginRigth > 10) {

                                    person.marginLeft = myChildrenPrevNodeMarginRigth - 10;

                                }

                            }

                        }

                    }


                });

            }

        },

        checkChildren(person) {

            let count = this.originData[person.sesu + 1].filter(val => {

                return val.parent == person.no;

            });

            return count.length;

        }

    }

});
