<p>
<img src="https://i.imgur.com/nYNSkxM.png" alt="lcookie Render Poster">
</p>

<h1 style="text-align:center">LCookie</h1>

> Lightweight cookie policy banner component.

> 

## Why
 Since I was too lazy to write a cookie consent banner when developing Licss, I shouldn't write it, but due to the hifocus proposal, I plan to make a separate JavaScript for everyone to use.

## Definitions
 `lcookie` is a JavaScript that can be customized and automatically generates a cookie consent banner.

 [LF112/lcookie](https://github.com/lf112/lcookie) is an open source project, released under the [MIT License](https://github.com/LF112/lcookie/blob/master/LICENSE) as a part of [LF112](https://www.lf112.net) personal project.
 
## How to configure
The configuration is easy. We made it!

### First step
You need to first introduce JavaScript on `</body>`.
```
     <script src="source/lcookie.js"></script>
```

### Second step
If you feel that you don't need configuration, lcookie provides the basic configuration, you can just type `lcookie()`;
```
     <script>
         lcookie();
     </script>
```

If you need configuration, you can:
```
    <script>
        lcookie([
            ['Cookie Consent Banner','By accessing the website and accepting the Cookie Policy, you agree to use the cookies provided by the Site in accordance with the Terms and Conditions.'],
            ['Accept','Detailed','https://github.com/lf112/lcookie'],
            ['#fff','hsla(0,0%,96%,.6)','hsla(0,0%,82%,.5)','#515151','#515151','#a5a5a5']
        ]);
    </script>
```
The configuration is divided into three columns. In the first column you can configure the title and cookie consent banner summary, the second column is the pen for configuring the 'Agree' and 'Details' buttons, and the third line is where you configure the color in detail, from left to The right order is: background color, background effect 1, background effect 2, scroll bar background color, theme color, button background color.

## Credit

thanks to [@hifocus](https://github.com/hifocus). README.md copy from him!
