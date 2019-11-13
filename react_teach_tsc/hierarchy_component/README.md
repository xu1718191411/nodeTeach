# This implementation shows the two usages

## 1. multi components in hierarchy

- BaseComponent
    - HeaderComponent
        - MenuComponent
- ContentComponent

## 2. In order to reflect the data by invoking the inner component, We have to pass the call back from root to child.This is really trouble some. So in the next selection we introduce the use of redux to avoid the troublesome
    
       
                                                                                MenuComponent  
                                                                           ------------------------   
                                             HeaderComponent                   handleClickMenu()<------------- click on dom()
                                        ------------------------                       ↓
                BaseComponent               handleClickMenu()       ←    onClickMenuFromMenuComponent()
           ------------------------                ↓
               handleClickMenu()     ←    onClickMenuFromHeader()        
                    state
                      ↓
                    props
               ContentComponent 
          -------------------------
                   render()
                   
## 3. review

![](./images/screenshot.gif) 

## 4. process
 - npm install
 - npm run serve
