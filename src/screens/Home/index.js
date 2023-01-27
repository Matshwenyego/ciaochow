import { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from "react-native";
import { Icons, colors } from "assets";
import { TabView, SceneMap } from "react-native-tab-view";
import { ImageSlider } from "react-native-image-slider-banner";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../components/Button";
import * as API from "../../services/default";
import { BASE_URL } from "../../utils/constants";
import styles from "./styles";

export default function Home() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [randomIndex, setRandomIndex] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = API.get(`${BASE_URL}/api/chows?populate=*`);
    const data = await response;
    if (data) {
      const rand = Math.floor(Math.random() * 2);
      const imgs = [];
      setData(data.data);
      setRandomIndex(rand);
      data.data[rand].attributes.Image.data.map((item) => {
        return imgs.push({
          img: `${BASE_URL}/uploads/${item.attributes.formats.thumbnail.hash}${item.attributes.formats.thumbnail.ext}`,
        });
      });
      setImages(imgs);
    }
  };

  const FirstRoute = () => (
    <View style={styles.tabContainer}>
      <Text style={styles.tabText}>
        {data[randomIndex]?.attributes?.Description}
      </Text>
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.tabContainer}>
      <Text style={styles.tabText}>N/A</Text>
    </View>
  );

  const [routes] = useState([
    { key: "first", title: "Description" },
    { key: "second", title: "Nutrition facts" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props) => {
    return (
      <View style={styles.renderTabContainer}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={styles.renderTabText}
              onPress={() => setIndex(i)}
              key={route + i}
            >
              <Animated.Text
                style={{
                  color:
                    props.navigationState.index === i
                      ? colors.primary
                      : colors.gray1,
                }}
              >
                {route.title}
              </Animated.Text>
              {props.navigationState.index === i ? (
                <View style={styles.indicator} />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const randomize = () => {
    const rand = Math.floor(Math.random() * 2);
    const imgs = [];
    setRandomIndex(rand);
    data[rand].attributes.Image.data.map((item) => {
      return imgs.push({
        img: `https://ciaochow.plusnarrative.biz/uploads/${item.attributes.formats.thumbnail.hash}${item.attributes.formats.thumbnail.ext}`,
      });
    });
    setImages(imgs);
  };

  if (images) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageSlider
            data={images}
            autoPlay={false}
            closeIconColor={colors.white}
            showHeader={false}
            preview={false}
            caroselImageStyle={{ resizeMode: "cover" }}
            caroselImageContainerStyle={{ height: "100%", width: "auto" }}
          />
          <LinearGradient
            style={styles.gradient}
            colors={[colors.transparent, colors.blackCC]}
            start={[0.4, 0.8]}
            end={[0.3, 0]}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <View style={styles.row}>
              <Text style={styles.titleText}>
                {data[randomIndex]?.attributes?.Title}
              </Text>
            </View>
            <View style={styles.row}>
              <Icons.Favourite />
            </View>
          </View>
          <View style={styles.tabViewContainer}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={"Nah! Find something else."}
              onPress={() => randomize()}
              backgroundColor={colors.primary}
              color={colors.white}
            />
          </View>
        </View>
      </View>
    );
  }
}
