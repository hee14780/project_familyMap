// define the tree-item component
Vue.component("tree-item", {
    template: "#item-template",
    props: {
        item: Object
    },
    data: function () {
        return {
            isShowLifeTime: false,
            jogbo_img: ""
        };
    },
    methods: {
        // 일생(?) 컨텐츠 토글
        toggle: function (item) {
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
                        parent: 12, //부모번호
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
                        parent: 11, //부모번호
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
                        no: 30, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 23, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 0, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 31, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 23, //부모번호
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
                        parent: 23, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 2, //형제순서
                        sex: 1, //성별 (0:남자, 1:여자)
                        name: "강지안",
                        marginRight: 0
                    },
                    {
                        no: 34, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 23, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강하준",
                        marginRight: 0
                    },
                    {
                        no: 33, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 21, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 2, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강서준",
                        marginRight: 0
                    }

                ],
                3: [
                    {
                        no: 41, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 32, //부모번호
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
                        parent: 32, //부모번호
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
                        parent: 32, //부모번호
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
                        parent: 32, //부모번호
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
                        parent: 32, //부모번호
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
                        parent: 32, //부모번호
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
                        parent: 31, //부모번호
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
                ],
                4: [
                    {
                        no: 70, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 47, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 1, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 71, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 2, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 72, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 46, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 3, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 73, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 46, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 4, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"],
                        marginRight: 0 //일생
                    },
                    {
                        no: 74, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 46, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 5, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 75, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 6, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 76, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 41, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 7, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 77, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 8, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"],
                        marginRight: 0 //일생
                    },
                    {
                        no: 78, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 50, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 9, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 79, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: 50, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 10, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    },
                    {
                        no: 80, //자신의 키값이면서 자녀가 부모를 찾을때의 값
                        parent: null, //부모번호
                        pa: 1, //권수
                        page: 1, //페이지
                        sesu: 4, //세수
                        seq: 11, //형제순서
                        sex: 0, //성별 (0:남자, 1:여자)
                        name: "강도윤", //이름
                        lifeTime: ["나는 어디서 태어났으며", "나는 무슨일을 하였으며", "나는 어떻게 생을 마감하였다"], //일생
                        marginRight: 0
                    }
                ]
            },
            showFamilyMap: 0
        };
    },
    created: function () { },
    methods: {
        getFamilyMap() {
            for (let i = 0; i <= 4; i++) {
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
                person.testCount = 0;

                chkChildred.forEach(children => {
                    person.children.push(children);
                    person.testCount++;
                    let child_no = this.originData[index].findIndex(obj => obj.no == children.no);
                    this.originData[index].splice(child_no, 1);
                    this.checkChildren(children, children.sesu);
                });
            }
        }
    }
});
