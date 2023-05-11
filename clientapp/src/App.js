import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import JournalListView from './components/JournalListView';
import JournalInfo from './components/JournalInfo';

const dummy_data = {
  "user": {
    "journals": [
      {
        "journal_name": "Eurotrip for 1 week, may 2021",
        "journal_info": [
          {
            "todo": [
              {
                "done": "true",
                "todo_item": "one"
              },
              {
                "done": "false",
                "todo_item": "two"
              },
              {
                "done": "false",
                "todo_item": "three"
              }
            ],
            "map": [
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              }
            ]
          }
        ]
      },
      {
        "journal_name": "Eurotrip for 2 week, may 2022",
        "journal_info": [
          {
            "todo": [
              {
                "done": "true",
                "todo_item": "one"
              },
              {
                "done": "false",
                "todo_item": "two"
              },
              {
                "done": "false",
                "todo_item": "three"
              }
            ],
            "map": [
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              }
            ]
          }
        ]
      },
      {
        "journal_name": "Eurotrip for 3 weeks, may 2023",
        "journal_info": [
          {
            "todo": [
              {
                "done": "true",
                "todo_item": "one"
              },
              {
                "done": "false",
                "todo_item": "two"
              },
              {
                "done": "false",
                "todo_item": "three"
              }
            ],
            "map": [
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              }
            ]
          }
        ]
      }
    ]
  }
}

const router = createBrowserRouter([
  { path: '/', element: <JournalListView data={dummy_data} /> }
])

dummy_data.user.journals.map((journal) => 
  router.routes.push({
    path: `${journal.journal_name}`,
    element:  <JournalInfo info={journal.journal_info}/>,
  }))
      
function App() {
  // why double amount of items in the router.routes array?
  console.log(router.routes.push({path: 'test', element: <JournalInfo info='test info'/>}))
  console.log(router.routes)
  return (
    <>
      <h1>i heart my travel</h1>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

