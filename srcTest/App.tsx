/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import Svg, {Path as SvgPath} from 'react-native-svg';
import {
  Canvas,
  Path as SkiaPath,
  Group,
  DashPathEffect,
} from '@shopify/react-native-skia';
import {LineGraph, usePanGesture} from './reactNativeGraph';
import {SelectionSquare} from './SelectionSquare';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import data from './datasource';

const COLOR = '#6a7ee7';

const SVGPATH =
  'M0,285L47.875,240.6070365984003L95.75,165.02513070857154L143.625,49.86235882030106L191.5,49.86235882030106L239.375,51.242814639361455L287.25,80.19339091250515L335.125,65.28134839250103L383,15';
const SVGPATH2 =
  'M0,285L47.875,240.00526993793238L95.75,163.39881719170967L143.625,46.674961939337095L191.5,46.674961939337095L239.375,48.0741304602427L287.25,77.4171448647386L335.125,62.3029628762147L383,15H 393 L 393 302 L 0 302';

const LinePath = (props) => (
  <SkiaPath
    // @ts-ignore
    {...props}
    strokeWidth={1}
    stroke={{
      width: 1,
    }}>
    <DashPathEffect intervals={[5, 5]} />
  </SkiaPath>
);

const IndicatorValue2 = () => <Group />;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [pontSelected, setPointSelected] = useState();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const points = data;

  const panGesture = usePanGesture({holdDuration: 100});

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View>
            <Text style={{height: 40}}>{pontSelected ? JSON.stringify(pontSelected) : 'Empty'}</Text>
            <View>
              <View pointerEvents="none">
                <LineGraph
                  style={styles.graph}
                  animated
                  enablePanGesture
                  enableIndicator
                  color="#FF0000"
                  points={points}
                  valueKey="value2"
                  panGesture={panGesture}
                  indicator={IndicatorValue2}
                  SelectionDot={SelectionSquare}
                  LinePath={LinePath}
                />
              </View>
              <View
                style={{width: '100%', height: '100%', position: 'absolute'}}>
                <LineGraph
                  style={styles.graph}
                  animated
                  enablePanGesture
                  enableIndicator
                  color="#00FF00"
                  points={points}
                  valueKey="value1"
                  panGesture={panGesture}
                  onPointSelected={setPointSelected}
                  onGestureEnd={() => setPointSelected(undefined)}
                />
              </View>
            </View>
          </View>
          <View>
            <Canvas style={styles.graph}>
              <SkiaPath path={SVGPATH2} color="lightblue" />
            </Canvas>
            <View style={styles.graph}>
              <Svg
                width="100%"
                height="100%"
                viewBox={`0 0 391 300`}
                renderToHardwareTextureAndroid>
                {/* <Defs>{typeof areaFill === 'function' && areaFill()}</Defs> */}
                <SvgPath
                  d={SVGPATH2}
                  /* Extend the line to max width and give it a bounding box */
                  // dStatic={`H ${boundingBoxWidth} L ${boundingBoxWidth} ${boundingBoxHeight} L 0 ${boundingBoxHeight}`}
                  // fill={
                  //   typeof areaFill === 'string' ? areaFill : 'url(#areaFill)'
                  // }
                  // stroke={primaryLineColor}
                  // strokeWidth={primaryLineWidth}
                  // duration={500}
                  // animate
                />
              </Svg>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  graph: {
    // alignSelf: 'center',
    width: '100%',
    aspectRatio: 1.4,
    borderWidth: 1,
    marginTop: 20,
  },
});

export default App;
