import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import LoginScreen from "./src/screen/login/login.screen";
import allReducers from "./src/reducers";
import {createStore} from 'redux'
import {Provider} from "react-redux";
import RegisterScreen from "./src/screen/register/register.screen";
import PitchList from "./src/screen/pitch/pitchList.screen";
import NavigationBar from "./src/component/navigationBar";
import variables from "./src/theme/variables";

const store = createStore(allReducers);
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router navigationBarStyle={{backgroundColor: variables.navigationBarVerticalColor}}
                        titleStyle={{color: variables.textColor}}>
                    <Scene key="root">
                        <Scene key="login" component={LoginScreen} hideNavBar initial/>
                        <Scene key="register" component={RegisterScreen} hideNavBar/>
                        <Scene key="drawer"
                               drawerImage={require('./assets/buger.png')}

                               drawer
                               contentComponent={NavigationBar}
                               hideNavBar>
                            <Scene key="pitchList"
                                   title="Danh sách sân bóng"
                                   component={PitchList}/>
                        </Scene>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
