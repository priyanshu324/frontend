import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useContext } from "react";
import FooterMenu from "../components/Menu/FooterMenu";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
    //global state
    const [post] = useContext(PostContext);
    return (
        <View style={styles.container}>
            <ScrollView>
                <PostCard post={post} />
                {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
            </ScrollView>
            <View style={{ backgroundColor: "#ffffff" }}>
                <FooterMenu />
            </View>
        </View>
    );
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#af9f85',
    },
    container_1: {
        backgroundColor: "#fff"
    }
})