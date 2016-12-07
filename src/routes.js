module.exports = [

    {
      path : "/",
      name : "Index",
      children : [
        {
          path : "/",
          name : "home",
          component : require("./view/Home.vue")
        }
      ]
    }

]
