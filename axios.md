# 异步转同步
``` javascript
    getRequest: async function(){
        var res1 = await axios.get(url,{
            params: {},
        });
        console.log(res1);
        var res2 = await axios.get(url);
        console.log(res2);
    }
```