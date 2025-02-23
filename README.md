# Grid Layout (*HTML5, CSS3, JS*)

## Using mobile first approach with scroll reveal effect

### Here is the [live project](https://frontend-mentor-challenges-2-six.vercel.app/)

### Fun Part

```
const scrollUpBtn = document.querySelector(".up-btn");
    
    window.onscroll = function() {
      console.log(document.body.scrollTop);
      console.log(document.documentElement.scrollTop);

      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) //this is the key!
      {
        scrollUpBtn.style.display = "block";
        document.documentElement.clientWidth>1024 ? scrollUpBtn.style.visibility = "visible" : scrollUpBtn.style.visibility = "hidden";
      }
      else
      {
        scrollUpBtn.style.display = "none";
      }
    };
```

#### Sample View

![Project Demo](design/desktop-design.jpg)



