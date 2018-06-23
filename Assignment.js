// Defining a class
var Youtube = /** @class */ (function () {
    // Constructor//
    function Youtube(video_title, video_type, video_likes, video_dislikes, video_subscription, No_of_comments, Video_length, Video_detail) {
        var _this = this;
        this.getvideotitle = function () {
            return _this.video_title;
        };
        this.getvideolikes = function () {
            return _this.video_likes;
        };
        this.getvideodislikes = function () {
            return _this.video_dislikes;
        };
        this.getvideosubscription = function () {
            return _this.video_subscription;
        };
        this.getVideoType = function () {
            return _this.video_type;
        };
        this.getNoOfComments = function () {
            return _this.No_of_comments;
        };
        this.getVideoLength = function () {
            return _this.Video_length;
        };
        this.getVideoDetails = function () {
            _this.Video_detail[0];
        };
        this.video_title = video_title;
        this.video_type = video_type;
        this.video_likes = video_likes;
        this.video_dislikes = video_dislikes;
        this.video_subscription = video_subscription;
        this.No_of_comments = No_of_comments;
        this.Video_length = Video_length;
        this.Video_detail = Video_detail;
    }
    return Youtube;
}());
var title = new Youtube("Dear Zindgi", "Rommantic", 23456, 1234, 2345678, 3476, "3 min", ["tT4b587q12l", "generate_time"]);
var getTitle = title.getvideotitle();
var likes = title.getvideolikes();
var subscription = title.getvideosubscription();
var dislikes = title.getvideodislikes();
var getType = title.getVideoType();
var getCount = title.getNoOfComments();
var getTime = title.getVideoLength();
var getDetail = title.getVideoDetails();
console.log(getType);
console.log(getTitle);
console.log(likes);
console.log(dislikes);
console.log(getCount);
console.log(getTime);
console.log(getDetail);
var Facebook = /** @class */ (function () {
    //Constructor//
    function Facebook(UserName, UserNickName, UserGender, UserBirthday, UserFavQuote, UserBloodGroup, UserEmailId, UserFacebookId, UserContactNo, UserIntrestedIn, UserReligiousViews, UserPoliticalViews) {
        var _this = this;
        this.getUserName = function () {
            return _this.UserName;
        };
        this.getUserNickname = function () {
            return _this.UserNickName;
        };
        this.getUserGender = function () {
            return _this.UserGender;
        };
        this.getUserBirthday = function () {
            return _this.UserBirthday;
        };
        this.getUserFavQuote = function () {
            return _this.UserFavQuote;
        };
        this.getUserBloodGroup = function () {
            return _this.UserBloodGroup;
        };
        this.getUserEmailid = function () {
            return _this.UserEmailId;
        };
        this.getUserFacebookid = function () {
            return _this.UserFacebookId;
        };
        this.getUserContactInfo = function () {
            return _this.UserContactNo;
        };
        this.getUserIntrest = function () {
            return _this.UserIntrestedIn;
        };
        this.getUserReligiousViews = function () {
            return _this.UserReligiousViews;
        };
        this.getUserPoliticalView = function () {
            return _this.UserPoliticalViews;
        };
        this.UserName = UserName;
        this.UserNickName = UserNickName;
        this.UserGender = UserGender;
        this.UserBirthday = UserBirthday;
        this.UserFavQuote = UserFavQuote;
        this.UserBloodGroup = UserBloodGroup;
        this.UserEmailId = UserEmailId;
        this.UserFacebookId = UserFacebookId;
        this.UserContactNo = UserContactNo;
        this.UserIntrestedIn = UserIntrestedIn;
        this.UserReligiousViews = UserReligiousViews;
        this.UserPoliticalViews = UserPoliticalViews;
    }
    return Facebook;
}());
var Uname = new Facebook("Ishan krishana Sharma", "Ishu", "27-may-1992", "Male", "Love Your Choices", "O+", "ishankrishansharma@gmail.com", "http://facebook.com/ishankrishan.sharma", 8358829642, "Women", "Multi-Religious", "No Views");
var getName = Uname.getUserName();
var getNickName = Uname.getUserNickname();
var getAge = Uname.getUserBirthday();
var getFavQuote = Uname.getUserFavQuote();
var getBloodGroup = Uname.getUserBloodGroup();
var getEmailid = Uname.getUserEmailid();
var getFacebookid = Uname.getUserFacebookid();
var getContact = Uname.getUserContactInfo();
var getgender = Uname.getUserGender();
var getIntrest = Uname.getUserIntrest();
var getReliogiousviews = Uname.getUserReligiousViews();
var getpoliticalViews = Uname.getUserPoliticalView();
console.log(getName);
console.log(getNickName);
console.log(getAge);
console.log(getFavQuote);
console.log(getBloodGroup);
console.log(getEmailid);
console.log(getFacebookid);
console.log(getContact);
console.log(getgender);
console.log(getIntrest);
console.log(getReliogiousviews);
console.log(getpoliticalViews);
