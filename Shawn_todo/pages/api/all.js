// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const DATA=[{id:'todo-0',title:'Math', createdDate:'Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)',completedDate:null, description:"",completed:false},
{id:'todo-1',title:'Art', createdDate:'Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)',completedDate:null, description:"",completed:false},
{id:'todo-2',title:'Biology', createdDate:'Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)',completedDate:'Sun Dec 06 2021 02:13:10 GMT-0400 (Atlantic Standard Time)', description:"",completed:true}]
export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json(DATA)

  }, 1000);
}
