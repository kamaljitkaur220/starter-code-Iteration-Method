// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
//kata1
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//kata 1 
const isActiveUser = users.filter(user => user.isActive === true)
printKata(1, isActiveUser)

//kata2

const userEmail = users.map(user => user.email)
printKata(2,userEmail)

//kata3

const userCompany= users.some(user => user.company === 'OVATION')
printKata(3, userCompany)


//kata4

const age = users.find(user => user.age > 38)
printKata(4,age)

//kata5 

const isActiveAge = users.filter(user => user.age === 38).find(user => user.isActive === true)
printKata(5,isActiveAge)

//kata 6

const userBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
 printKata(6, userBalance)

//kata7

const userTag = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
printKata(7,userTag)
