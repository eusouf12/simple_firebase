/*       initial setup
------------------------------------------
*  1. visit:console.firebase.google.com
*2.creat a project(skip google analytic)
* 3. register app(creat config)
* 4 . install firebase
* 5. add config file to your project
* 6 . DANGER : do not publish or make firebase config to public by pushing those do github
----------------------------------------
*         INTRIGRATION
--------------------------------------------
7. go to docs>build>web>get start
8* export app from firebase/auth
9*Login,jsx import grtAuthfrom firebase/auth
10.creat const auth=getAuth(app)
----------------------------------------------------
*                Provider
-----------------------------------
11. import googleprovaider and creat new provider
12.use signInWithPopup and pass auth and provider
*/ 