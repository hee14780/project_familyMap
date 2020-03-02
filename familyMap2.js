// define the tree-item component
Vue.component("tree-item", {
    template: "#item-template",
    props: {
        item: Object
    },
    data: function() {
        return {
            isShowLifeTime: false,
            jogbo_img: ""
        };
    },
    methods: {
        // 일생(?) 컨텐츠 토글
        toggle: function(item) {
            this.isShowLifeTime = this.isShowLifeTime ? false : true;

            let img_path = "http://jogboapi.appmowa.com/source/" + item.pa + item.page + ".png";
            console.log(img_path);
            this.jogbo_img = img_path;
            $(".connect_area").hide();
        }
    }
});

// boot up the family
var family = new Vue({
    el: "#familyWrap",
    data: () => {
        return {
            originData: {
                0: [
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
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안"
                    },
                    {
                        no: 3, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 0, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준"
                    },
                    {
                        no: 4, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 0, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    }
                ],
                1: [
                    {
                        no: 5, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 1, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"] //일생
                    },
                    {
                        no: 6, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 1, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안"
                    },
                    {
                        no: 7, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 1, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준"
                    },
                    {
                        no: 8, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    },
                    {
                        no: 13, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    },
                    {
                        no: 14, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 1, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    }
                ],
                2: [
                    {
                        no: 9, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 7, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"] //일생
                    },
                    {
                        no: 10, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 7, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안"
                    },
                    {
                        no: 11, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 8, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준"
                    },
                    {
                        no: 12, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    },
                    {
                        no: 15, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    },
                    {
                        no: 16, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준"
                    }
                ]
            },
            showFamilyMap: 0
        };
    },
    created: function() {},
    methods: {
        getFamilyMap() {
            for (let i = 0; i <= 2; i++) {
                this.originData[i].forEach(person => {
                    this.checkChildren(person, i);
                });
            }

            setTimeout(() => {
                console.log(this.originData);
                this.showFamilyMap = 1;
            }, 500);
        },

        checkChildren(person, i) {
            let index = i + 1;

            if (!this.originData[index]) {
                return;
            }

            let chkChildred = this.originData[index].filter(obj => {
                return obj.parent == person.no;
            });

            let persionIndex = this.originData[i].findIndex(obj => obj.no == person.no);

            if (chkChildred.length == 0 && persionIndex != -1) {
                return;
            } else {
                person.children = [];

                chkChildred.forEach(children => {
                    person.children.push(children);
                    let child_no = this.originData[index].findIndex(obj => obj.no == children.no);
                    this.originData[index].splice(child_no, 1);
                    this.checkChildren(children, children.sesu);
                });
            }
        }
    }
});
