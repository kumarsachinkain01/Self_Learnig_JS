// const course = {
//     coursename : "Js IN Hindi",
//     price: 999,
//     courseInstructor : "Sachin Kumar",
//     courseDuration : "6 months",
//     courseLanguage : "Hindi",
//     courseStatus : "Active",
//     courseStudents : 200,
//     courseFeedback : 4.5,
// }

// const value = Object.values(course);
// console.log(value.filter(function(val){
//   return val === "Sachin Kumar" || val === "Active" || val === "6 months" || val === "Active"
// }));
// console.log("Course Name : ", course.coursename);

// Object de structuring;

// const {courseInstructor: instructor} = course

// console.log(instructor);

// random users API 

const randomUsers ={
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Sofie",
          "last": "Rasmussen"
        },
        "location": {
          "street": {
            "number": 9687,
            "name": "Søbakken"
          },
          "city": "Sørvad",
          "state": "Syddanmark",
          "country": "Denmark",
          "postcode": 54762,
          "coordinates": {
            "latitude": "-46.6487",
            "longitude": "26.8670"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "sofie.rasmussen@example.com",
        "login": {
          "uuid": "eeaefdee-76f4-452d-a839-2586f24dbd2e",
          "username": "purplecat415",
          "password": "chivas",
          "salt": "z0qviZOF",
          "md5": "6d6d04048f76f9be56f89a1792fb0268",
          "sha1": "40a611be918cb68454740cabb7d8ca226a3f0c14",
          "sha256": "67466f9c9e5f8e4d453e6e7c879f1241afe19fcd4600e451997619c570de3a4b"
        },
        "dob": {
          "date": "1973-11-27T05:40:50.156Z",
          "age": 51
        },
        "registered": {
          "date": "2010-12-22T21:55:46.827Z",
          "age": 13
        },
        "phone": "12868190",
        "cell": "94616604",
        "id": {
          "name": "CPR",
          "value": "261173-9082"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/92.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
        },
        "nat": "DK"
      }
    ],
    "info": {
      "seed": "b1851cea0f308e55",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }

