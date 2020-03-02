// define the tree-item component
Vue.component('tree-item', {
    template: '#item-template',
    props: {
        item: Object
    },
    data: function () {
        return {
            isShowLifeTime: false,
            jogbo_img: ""
        }
    },
    methods: {
        // 일생(?) 컨텐츠 토글
        toggle: function (item) {
            this.isShowLifeTime = this.isShowLifeTime ? false : true;
            this.listingElement(item.no, item.sesu);

            let img_path = "http://jogboapi.appmowa.com/source/" + item.pa + item.page + ".png";
            console.log(img_path);
            this.jogbo_img = img_path;
            $(".connect_area").hide();
        },

        listingElement(no, sesu) {

            $(document).ready(function () {

                // console.log(sesu);
                // let lastLfet = $('.sesu_' + sesu).last().offset().left;
                // let lastWidth = $('.sesu_' + sesu).last().outerWidth();
                // let extentionWidth = parseInt(lastLfet) + parseInt(lastWidth);

                // $(".notP_" + sesu).css("left", extentionWidth + "px");

                let sesuStart = $("#sesuStart").val();
                let sesuEnd = $("#sesuEnd").val();
                let extentionWidth = ""

                for (let i = sesuStart; i <= sesuEnd; i++) {
                    let chk_element = $(".sesu_" + i).length;
                    if (chk_element == 0) {
                        extentionWidth = 100;
                    } else {

                        let lastLfet = $('.sesu_' + i).last().offset().left;
                        let lastWidth = $('.sesu_' + i).last().outerWidth();
                        extentionWidth = parseInt(lastLfet) + parseInt(lastWidth);

                        // let lastFlag = $('.sesu_' + i).last().attr("id");
                        // let thisWidth = "";

                        // if (lastFlag == "node_" + no) {
                        //     console.log("good");
                        //     thisWidth = $('.sesu_' + i).last().outerWidth() - 67;
                        // } else {
                        //     console.log("bad");
                        //     thisWidth = 0;
                        // }

                        // var obj_left = $('.sesu_' + i).last().offset().left + 67;
                        // var obj = thisWidth + obj_left;
                    }

                    $(".notP_" + i).css("left", extentionWidth + "px");
                    // $(".notP_" + i).css("left", obj + "px");
                }
            });

        },

        // 자녀컴포넌트에서 부모컴포넌트로 클릭한 부모정보 전달
        selectedChild: function (person) {

            store.state.connect_state = 1;
            store.state.parent = person;

            $(document).ready(function () {
                let targetNode = $(".node_" + person.no);
                let showLeft = targetNode.offset().left;
                let showTop = targetNode.offset().top;

                $(".connect_area").css("top", showTop).css("left", showLeft + 48);
                $(".selected_name").text(person.name);
                $(".selected_sesu").text(person.sesu);
                $(".connect_area").show();
            });
        }

    }

})





// boot up the family
var family = new Vue({
    el: "#familyWrap",
    data: () => {
        return {
            originData: [
                // 0: [
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
                },
                // ],
                // 1: [
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
                // ],
                // 2: [
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
                    parent: 7, //부모번호
                    pa: 1, //권수
                    page: 1, //페이지
                    sesu: 2, //세수
                    seq: 4, //형제순서
                    sex: 0, //성별 (0:남자, 1:여자)
                    name: "강하준"
                }
            ],
            familyMap: [],
            tempData: []
        };
    },
    created: function () { },
    methods: {
        test() {

            let tempData = [];

            this.originData.forEach(family => {

                this.test2(family);
            });

            console.log(this.originData);
            this.familyMap = this.originData;

        },

        test2(array) {

            let chk = this.originData.filter(obj => {

                return obj.parent == array.no;

            });

            let childNo = this.originData.findIndex(obj => obj.no == array.no);

            if (chk.length == 0 && childNo != -1) {
                // 자녀가 없으면
                return;
            } else {
                // 자녀가 있으면 재귀
                array.children = [];
                chk.forEach(val => {

                    array.children.push(val);
                    let childNo = this.originData.findIndex(obj => obj.no == val.no);
                    this.originData.splice(childNo, 1);
                    this.test2(val);

                });

            }

        }
    }
});
