import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import FooterMenu from "../components/Menu/FooterMenu";
import axios from "axios";
import PostCard from "../components/PostCard";

const Myposts = () => {
    //state
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    //get user post
    const getUserPosts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/post/get-user-posts");
            setLoading(false);
            setPosts(data?.userPosts);
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert(error);
        }
    };

    //initial
    useEffect(() => {
        getUserPosts();
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <PostCard posts={posts} myPostScreen={true} />
                {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
            </ScrollView>
            <View style={{ backgroundColor: "#ffffff" }}>
                <FooterMenu />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "space-between",
        backgroundColor: '#af9f85',
    },
});
export default Myposts;