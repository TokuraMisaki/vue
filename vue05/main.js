const app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        books: [
            {
                id: 1,
                name: '<<算法导论>>',
                date: '1010/9',
                price: '100.00',
                count: 1
            },
            {
                id: 2,
                name: '<<深入理解java虚拟机>>',
                date: '1010/9',
                price: '140.00',
                count: 1
            },
            {
                id: 3,
                name: '<<机器学习>>',
                date: '1010/9',
                price: '90.00',
                count: 1
            },
            {
                id: 4,
                name: '<<设计模式>>',
                date: '1010/9',
                price: '200.00',
                count: 1
            },
            {
                id: 5,
                name: '<<代码整洁之道>>',
                date: '1010/9',
                price: '80.00',
                count: 1
            },
        ]
    }
})