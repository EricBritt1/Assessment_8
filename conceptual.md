### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front end framework catered toward javascript. I don't know when and why you would want to use it.

- What is Babel?
I don't know what Babel is

- What is JSX?
I don't know what JSX is

- How is a Component created in React?
A componenet is created by doing the following:

const ThisComponent = () = {

    return (
        <div> other tags and info <div>
    )
};

- What are some difference between state and props?
State:
Initial value of some sort expected to be changed
Not set
Can be manipulated by componenets


Props:
Set
Read only
Cannot be manipulated by componenents 

- What does "downward data flow" refer to in React?
The incorret way to utilize componenets. You want to pass data upward from smaller componenents to the highest componenent. 

- What is a controlled component?
I don't know what a controlled componenet is

- What is an uncontrolled component?
I don't know what an uncontrolled componenet is

- What is the purpose of the `key` prop when rendering a list of components?
I don't know the purpose of the key prop

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
I don't know why using an array index is a poor choice for a key prop when rendering a list of componenets

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a useful hook that allows you to trigger a certain effect during the process of unmounting and mounting when elements are rendered. The time at which this effet is trigged can also be controlled by a list of dependencies or an empty array.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
Almost like state but, allows you to reference anything in the dom anywhere in file.

- When would you use a ref? When wouldn't you use one?
I don't know the answer to this question

- What is a custom hook in React? When would you want to write one?
A custom hook is your own personal effect that you want to trigger during the process of unmounting and mounting when elements are rendered. What's important is that custom hooks are meant to be reusable and universal across all components. These are not meant to be hard coded!