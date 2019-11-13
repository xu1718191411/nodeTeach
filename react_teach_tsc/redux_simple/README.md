# This implementation shows how to use the redux to deal with the global state

## 1. purpose
 - Usage of build up a start-up react project with typescript and react-redux
 - Usage of react-redux
 
## 2. points
 - We don't need to pass callback from root to inner
 - At anywhere,we can dispatch an action
 - The Reducer will catch the action and change the global state
 - When the state changes, mapStateToProps will be invoked and props can be remade according to the state
 
 
```text
     - in the past
     
      dom event -> child component function -> parent component function -> .... -> root component function
                                                                                                ↓
     child component  <-  pass state to childComponent as childComponent's props    <-     change state
          ↓
       render()
     
     
     - now
     dom event -> dispatch(action) -> reducer
                                         ↓
                                    change state
                                         ↓
                            every/specific component mapStateToProps
                                         ↓
                                      render()                      
```                                      

## 3. process
 - npm install
 - npm run serve

## 4. preview
![](./images/screenshot.gif)
                        
 