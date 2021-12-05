// Mock up API and Mock up Data

const DATA = [{ id: 'todo-0', title: 'Math', createdDate: 'Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)', completedDate: null, 
description: "Mathematics (from Greek: μάθημα, máthēma, 'knowledge, study, learning') includes the study of such topics as numbers (arithmetic and number theory),[1] formulas and related structures (algebra),[2] shapes and spaces in which they are contained (geometry),[1] and quantities and their changes (calculus and analysis).[3][4][5] There is no general consensus about its exact scope or epistemological status.[6][7]", completed: false ,uploadDate:"Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)"},
{ id: 'todo-1', title: 'Art', createdDate: 'Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)', completedDate: null, description: "Art is a wide range of human activities (or the products thereof) that involve creative imagination and an aim to express technical proficiency, beauty, emotional power, or conceptual ideas.", completed: false,uploadDate:"Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)" },
{ id: 'todo-2', title: 'Biology', createdDate: 'Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)', completedDate: 'Sun Dec 06 2021 02:13:10 GMT-0400 (Atlantic Standard Time)', description: "Biology is the scientific study of life.[1][2][3] It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field.", completed: true,uploadDate:"Sun Dec 05 2021 02:13:10 GMT-0400 (Atlantic Standard Time)" }]
export default function handler(req, res) {
    var k;
    for (var i = 0; i < DATA.length; i++) {
        if (req.query.id == DATA[i].id.toString()) {
            k = i;
            break;
        }

    }
    setTimeout(() => {
        res.status(200).json(DATA[k])

    }, 3000)
}
