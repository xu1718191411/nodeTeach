https://reactjs.org/docs/getting-started.html

通过创建react app的方式，创建react项目
按照官方文档，执行了下面的命令
npx create-react-app my-app

拿到这个项目后
cd my-app
npm install


1.state改变的时候会触发render()
2.state可以通过setState改变，props不可改变
3.传给子组建的成员函数要在constructor中通过bind绑定，因为子组件执行的原因吧
4.由此可见，随着层的越深，子组建要通过冒泡回调的方式，传给父组件，再由父组件通过改变父组件的state，通过组件的外置接口props一层一层的传给子组建