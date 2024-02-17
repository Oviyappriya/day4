//For above JSON,iterate over all for loops(forEach,for of,for,for in)
let resume=[{
    "name":"Oviyappriya",
    "email":"oviyappriya.a.s@gmail.com",
    "phone":"07123456789",
    "address":{
        "city":"Chennai",
        "country":"India",
    },
    "skills":[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "projects":[
        "Application development",
        "Web development",
        "Mobile development"]}]
//for of        
for(let resumes of resume){
    console.log(resumes);
}
//for 
for(let i=0;i<resume.length;i++){
    console.log(resume[i]);
}
//foreach
resume.forEach(element => {
    console.log(element);
});
//for in
let resumes={
    "name":"Oviyappriya",
    "email":"oviyappriya.a.s@gmail.com",
    "phone":"07123456789",
    "address":{
        "city":"Chennai",
        "country":"India",
    },
    "skills":[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "projects":[
        "Application development",
        "Web development",
        "Mobile development"]}

for (let key in resumes) {
    console.log(key+ " : "+ resumes[key])}
