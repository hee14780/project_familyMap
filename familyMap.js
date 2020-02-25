// define the tree-item component
Vue.component("tree-item", {
    template: "#item-template",
    props: {
        item: Object
    },
    data: function () {
        return {
            isShowLifeTime: false
        };
    },
    methods: {
        // 일생(?) 컨텐츠 토글
        toggle: function () {
            this.isShowLifeTime = this.isShowLifeTime ? false : true;
        }
    }
});

// boot up the family
var family = new Vue({
    el: "#familyWrap",
    data: () => {
        return {
            originData: [
                {
                    no: 1, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 1, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강도윤", //이름
                    lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"] //일생
                },
                {
                    no: 2, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 1, //형제순서
                    sex: 1, //성별 (0:남자, 1:여자)
                    name: "강지안"
                },
                {
                    no: 3, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 2, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강서준"
                },
                {
                    no: 4, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 3, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강하준"
                },
                {
                    no: 5, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 1, //형제순서
                    sex: 1, //성별 (0:남자, 1:여자)
                    name: "강서아"
                },
                {
                    no: 6, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 1, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강하은"
                },
                {
                    no: 7, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 2, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강유준"
                },
                {
                    no: 8, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 1, //형제순서
                    sex: 1, //성별 (0:남자, 1:여자)
                    name: "강나은"
                },
                {
                    no: 9, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: null, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 0, //세수
                    seq: 4, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강주원"
                },
                {
                    no: 10, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                    parent: 1, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 1, //세수
                    seq: 1, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강민준"
                }
            ],
            familyMap: [],
            familySesu: [],
            sesuStart: "",
            sesuEnd: "",
            isShowContent: false,
            tempArray: []
        };
    },
    created: function () { },
    methods: {
        getFamily2: function () {
            let url = "http://jogboapi.appmowa.com/jogbo_join_list.php";

            let send_data = {
                sesu: 1,
                limit: 3
            };

            axios.post(url, send_data).then(res => {

                console.log(res);
                console.log(this.familyMap);
                // res.forEach(data => {

                //     if (data.sesu == 1) {

                //         this.familyMap.push(data);

                //     }

                // });

                // console.log(this.familyMap);

            });



            // let send_data = {
            //     sesu: 1,
            //     limit: 3
            // };

            // let form = new FormData();
            // form.append('sesu', 1);
            // // form.append('pwd',this.userPass);

            // axios.post(url, {
            //     headers: { 'Content-type': 'application/x-www-form-urlencoded' },


            //     sesu: '1',

            // }).then(res => {
            //     console.log(res);
            // });
        },

        getFamily: function () {
            let diffSesu = this.sesuEnd - this.sesuStart;
            this.tempArray = [];

            for (let i = 0; i <= diffSesu; i++) {
                this.tempArray[i] = [];
            }

            this.originData.forEach(val => {
                if (val.sesu < this.sesuEnd) {
                    this.tempArray[val.sesu].push(val);
                }
            });

            console.log(this.tempArray);
        },

        getFamilyMap: function () {
            let loopcount = 0;
            this.isShowContent = true;

            while (this.originData.length > 0) {
                this.originData.forEach(person => {
                    // 가족 멤버 카운트가 모든 사람의 수와 같아 질 때 까지 루프
                    // 단 모든 사람은 한가족에 속해야 함
                    this.addFamily(this.familyMap, person);
                });

                //무한루프 방지를 위해 임시 카운트가 100을 초과하면 강제종료
                loopcount++;
                if (loopcount > 100) break;
            }

            //형제순서대로 멤버 정렬
            this.sortChild();

            console.log(this.familyMap, this.familySesu);
        },

        addFamily(family, person) {
            if (person.parent == null) {
                // 부모가 없으면 최초부모
                this.familyMap = person;

                // 세대리스트 배열에 중복되는 세대가 없으면 추가
                if (this.familySesu.indexOf(1) == -1) {
                    this.familySesu.push(1);
                }
            } else {
                // 파라메터로 넘어온 값이 배열인지 확인이 되면
                if (Array.isArray(family)) {
                    family.forEach(familyMember => {
                        // 부모번호가 일치하면 자녀로 추가
                        if (familyMember.no == person.parent) {
                            // 자녀의 데이터 값이 없으면 빈배열 추가
                            if (!familyMember.children) familyMember.children = [];

                            // 자녀배열에 데이터 추가
                            familyMember.children.push(person);
                            this.deletePerson(person);
                        }

                        // 세대리스트 배열에 중복되는 세대가 없으면 추가
                        if (this.familySesu.indexOf(familyMember.sesu) == -1) {
                            this.familySesu.push(familyMember.sesu);
                        }

                        // 해당 가족 멤버가 자녀가 있으면 재귀호출
                        if (familyMember.children && familyMember.children.length > 0) {
                            this.addFamily(familyMember.children, person); // 재귀호출
                        }
                    });
                } else {
                    if (family.no == person.parent) {
                        if (!family.children) family.children = [];
                        family.children.push(person);
                        this.deletePerson(person);
                    }

                    // 해당 가족 멤버가 자녀가 있으면 재귀호출
                    if (family.children && family.children.length > 0) {
                        this.addFamily(family.children, person); // 재귀호출
                    }
                }
            }
        },

        // 재귀호출로 인한 자녀 무한생성 방지를 위한 자녀 추가 후 해당 자녀 제거
        deletePerson: function (targetPerson) {
            for (let i = 0; i < this.originData.length; i++) {
                if (this.originData[i].no == targetPerson.no) {
                    this.originData.splice(i, 1);
                }
            }
        },

        //형제순서대로 멤버 정렬
        sortChild: function (children) {
            if (!children) children = this.familyMap.children;

            // 형제정렬 기준 1.성별, 2형제순서
            children.sort((child1, child2) => {
                if (child1.sex < child2.sex) {
                    let x = child1.sex;
                    let y = child2.sex;
                    return x < y ? -1 : x > y ? 1 : 0;
                }

                return child1.seq - child2.seq;
            });

            children.forEach(child => {
                if (child.children && child.children.length > 0) this.sortChild(child.children);
            });
        }
    }
});
