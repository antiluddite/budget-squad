Create a component for the Transactions page that has various filter components as children and collects the selected filters into an object that follows this structure:

{
  startDate: new Date('2021-09-27'),
  endDate: new Date('2021-10-01'),
  categoryId: 2
  payee: 'Maverik'
}

All the properties are optional and any unset properties should not be included or be set to null.

The component should take a function prop called onFilterChange that is called by the component, with the updated filter object, anytime the filtering is changed.

It should have a function for passing down through props to its children filter components for them to call when their filters are changed.



“filter array of objects in react js”
<script>
<div>
  {people.filter(person => person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    li>
  ))}
div>
</script>


https://stackoverflow.com/questions/43610859/react-filter-by-object-property
<script>
  id: "",
  date: "",
  payee: "",
  categoryId: "",
  notes: "",
  amount: "",

{Object.keys(this.state.onFilterChange)
  .filter(key => this.state.onFilterChange[key].main === true)
  .map((key, index) => {
    return <div key={key}>
             <h1>{this.state.onFilterChange[key].name}</h1>
             <p>{this.state.onFilterChange[key].main}</p>
           </div>
  })}
</script>


https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
<script>
import { useState, useEffect } from "https://cdn.skypack.dev/react";

    // Note: the empty deps array [] means
    // this useEffect will run once
    function App() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        useEffect(() => {
            fetch("https://restcountries.eu/rest/v2/all")
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, []);
</script>


Search Filter React Tutorial - Search Bar in React
https://www.youtube.com/watch?v=mZvKPtH9Fzo&t=128


https://medium.com/coding-at-dawn/how-to-pass-all-props-to-a-child-component-in-react-bded9e38bb62
<script>
  import React form "react"

  import DisplayAllProps from "./DisplayAllProps"
  import ChildComponent from "./ChildComponent"

  const ParentComponent = (props) => (
    <section>
     <h1>ParentComponent's props:</h1>
     <DisplayAllProps
      name={props.name}
      job={props.job}
      children={props.children}></DisplayAllProps>
      // both methods to pass children are equivalent
      <ChildComponent name={props.name} job={props.job}>
      {props.children}
      </ChildComponent>
      </section>
  )

  export default ParentComponent
</script>


https://medium.com/coding-at-dawn/how-to-pass-all-props-to-a-child-component-in-react-bded9e38bb62
<script>
import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import ChildComponent from "./ChildComponent"

const ParentComponent = (props) => (
  <section>
    <h1>ParentComponent's props:</h1>
    <DisplayAllProps {...props}></DisplayAllProps>
    <ChildComponent {...props}></ChildComponent>
  </section>
)

export default ParentComponent

</script>


https://reactjs.org/docs/thinking-in-react.html
"Thinking in React"


react-nanny:
"Utils to manage your React Children; find and filter children by type or custom function, enforce child content, and more!"
https://www.npmjs.com/package/react-nanny


Find & Filter React Children By Type (HTML Elements)
Discover the type of your React children — HTML Element Edition
https://mparavano.medium.com/find-filter-react-children-by-type-html-elements-11a0e7bd08bf

Find & Filter React Children By Type
Take control of your children in React for all environments
https://mparavano.medium.com/find-filter-react-children-by-type-d9799fb78292


JUNE 4, 2021 #REACT
How to Search and Filter Components in React
https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/



React - filter by object property
Asked 4 years, 9 months ago
Active 4 years, 9 months ago
Viewed 25k times
https://stackoverflow.com/questions/43610859/react-filter-by-object-property



react filter: filtering arrays in react with examples:
https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples



YouTube
Search Filter React Tutorial - Search Bar in React
156,188 viewsNov 24, 2020
https://www.youtube.com/watch?v=mZvKPtH9Fzo



JavaScript Data Grid: Filter API
You can access and set the models for filters through the grid API, or access individual filter instances directly for more control. This page details how to do both.
https://www.ag-grid.com/javascript-data-grid/filter-api/


DoctorDerek
medium-articles list on github
https://github.com/DoctorDerek/medium-articles


How to filter data in React
Let's learn how you can filter arrays of data in React
Posted on November 12, 2020
https://sebhastian.com/react-filter/
