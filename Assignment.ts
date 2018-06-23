
// Defining a class
class Youtube{
public video_title:string
public video_type:string
public video_likes:number
public video_dislikes:number
public video_subscription:number
public No_of_comments : number
public Video_length :any
public Video_detail :any[];

// Constructor//

constructor (video_title:string, video_type:string, video_likes:number, video_dislikes:number, video_subscription:number,No_of_comments:number,Video_length :any,Video_detail :any[]){

this.video_title = video_title;
this.video_type = video_type;
this.video_likes = video_likes;
this.video_dislikes = video_dislikes;
this.video_subscription = video_subscription
this.No_of_comments = No_of_comments;
this.Video_length = Video_length;
this.Video_detail = Video_detail
}
getvideotitle = ()=>{
return this.video_title;
}
getvideolikes = ()=>{
return this.video_likes;
}
getvideodislikes = ()=>{
return this.video_dislikes;
}
getvideosubscription = ()=>{
return this.video_subscription
}
getVideoType = ()=>{
    return this.video_type
}
getNoOfComments = ()=>{
 return this.No_of_comments
}
getVideoLength = () =>{
    return this.Video_length
}
getVideoDetails = ()=>{
    this.Video_detail[0]
}
}
let title = new Youtube("Dear Zindgi","Rommantic",23456,1234,2345678,3476,"3 min",["tT4b587q12l","generate_time"])
let getTitle=title.getvideotitle()
let likes=title.getvideolikes()
let subscription = title.getvideosubscription()
let dislikes = title.getvideodislikes()
let getType = title.getVideoType()
let getCount = title.getNoOfComments()
let getTime = title.getVideoLength()
let getDetail = title.getVideoDetails()
console.log(getType)
console.log(getTitle)
console.log(likes)
console.log(dislikes)
console.log(getCount)
console.log(getTime)
console.log(getDetail)


class Facebook{

    public UserName:string;
    public UserNickName: any;
    public UserGender : string;
    public UserBirthday :any;
    public UserFavQuote : string;
    public UserBloodGroup :any;
    public UserEmailId : any;
    public UserFacebookId : any;
    public UserContactNo : number;
    public UserIntrestedIn : string;
    public UserReligiousViews : string;
    public UserPoliticalViews : string;

//Constructor//

    constructor (UserName:string, UserNickName: any,UserGender : string, UserBirthday :any,UserFavQuote : string,UserBloodGroup :any, UserEmailId : any,UserFacebookId : any,UserContactNo : number,UserIntrestedIn : string,UserReligiousViews : string,UserPoliticalViews : string){
        this.UserName =UserName;
        this.UserNickName =UserNickName;
        this.UserGender = UserGender;
        this.UserBirthday = UserBirthday;
        this.UserFavQuote = UserFavQuote;
        this.UserBloodGroup = UserBloodGroup;
        this.UserEmailId = UserEmailId;
        this.UserFacebookId = UserFacebookId;
        this.UserContactNo = UserContactNo;
        this.UserIntrestedIn = UserIntrestedIn;
        this.UserReligiousViews = UserReligiousViews;
        this.UserPoliticalViews = UserPoliticalViews

        }

        getUserName = ()=>{
           return  this.UserName
        }
        getUserNickname = ()=>{
            return this.UserNickName
        }
        getUserGender = ()=>{
            return this.UserGender
        }
        getUserBirthday = ()=>{
            return this.UserBirthday
        }
        getUserFavQuote = ()=>{
            return this.UserFavQuote
        }
        getUserBloodGroup = ()=>{
            return this.UserBloodGroup
        }
        getUserEmailid = ()=> {
            return this.UserEmailId
        }
        getUserFacebookid =()=>{
            return this.UserFacebookId
        }
        getUserContactInfo =()=>{
            return this.UserContactNo
        }
        getUserIntrest = ()=>{
            return this.UserIntrestedIn
        }
        getUserReligiousViews = ()=>{
            return this.UserReligiousViews
        }
        getUserPoliticalView = ()=>{
            return this.UserPoliticalViews
        }
       
    }


let Uname = new Facebook ("Ishan krishana Sharma","Ishu","27-may-1992","Male","Love Your Choices","O+","ishankrishansharma@gmail.com","http://facebook.com/ishankrishan.sharma",8358829642,"Women","Multi-Religious","No Views")

let getName = Uname.getUserName();
let getNickName = Uname.getUserNickname()
let getAge = Uname.getUserBirthday()
let getFavQuote = Uname.getUserFavQuote()
let getBloodGroup = Uname.getUserBloodGroup()
let getEmailid = Uname.getUserEmailid()
let getFacebookid = Uname.getUserFacebookid()
let getContact = Uname.getUserContactInfo()
let getgender = Uname.getUserGender()
let getIntrest = Uname.getUserIntrest()
let getReliogiousviews = Uname.getUserReligiousViews()
let getpoliticalViews = Uname.getUserPoliticalView()
console.log(getName)
console.log(getNickName)
console.log(getAge)
console.log(getFavQuote)
console.log(getBloodGroup)
console.log(getEmailid)
console.log(getFacebookid)
console.log(getContact)
console.log(getgender)
console.log(getIntrest)
console.log(getReliogiousviews)
console.log(getpoliticalViews)