/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; 

import { plus, minus } from './src/action'; 

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class NewApp extends Component{

    constructor(props) {
        super(props);
        // this.state = {
        //     val: 0
        // }
    }
 
 render() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
          <TouchableOpacity
          onPress={() => {
              this.props.plus();
          }}>
              <Text>Plus</Text>
          </TouchableOpacity>

          <Text>{this.props.count}</Text>

          <TouchableOpacity
          onPress={() => {
              this.props.minus();
          }}>
              <Text>Minus</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapDispatchToProps = {
    plus,
    minus,
    // clearCircleHome
  };
  const mapStateToProps = (state) => {
      console.log('dfjg hjgj', JSON.stringify(state));
    return (
      {
         count: state.myreducer.count,
        // isLoading: state.circleHome.isLoading
      }
  );
  };

export default connect(mapStateToProps, mapDispatchToProps)(NewApp);
