// 1. Social Media Platforms:
//         many users can follow a particular person(subject) on a social media platform.
//         All the followers will be notified if the user makes any post.
//         The users can follow and unfollow the subject anytime they want.

// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.

// {
//   "string": "([])(){}(())()()"
// }

// {
// 	string: "()[{]}"
// }

// {
//   "string": "()[]{}{"
// }

// {
//   "string": "(((((({{{{{[[[[[([)])]]]]]}}}}}))))))"
// }

// {
//   "string": "(()())((()()()))"
// }

// [({}){]}

// {} [] ()

// List of users = [{
// 	id: number,
//   name: string
// }];

// React component
// where this user listing, option to edit name and delete any user.

// Layout component  - state :- Users:

// User - {...name, id}

// const User  = ({data, onDelete}) => {

// const [isEditModeEnabled, setEditModeEnabled] = useState(false)

// const onHandleDelete = () => {
// 	if(onDelete){
//   onDelete(data.id)
//   }
// }

//  return (<div onClick={onHandleDelete}>
//  <div>

//  {isEditModeEnabled ? <input value={data.name} onChange={handleChange} /> : <h3>data.name</h3>}
//  <div onClick={() => setEditModeEnabled(true)}>
//  <IconComponent />
//  </div>

//  </div>

//  </div>)
// }

// const Layout  = () => {
//  const [usersData, setUsersData] = useState(users)

//  const onDelete = useCallback((id) => {
//  		const filteredUsers = usersData.filter(fu => fu.id !== id)
//     setUsersData(filteredUsers)
//  })

//  return (<div>{usersData.map(us => <User data={us} onDelete={onDelete}/>)}</div>)
// }
