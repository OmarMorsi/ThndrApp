import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';

interface CardProps {
  name: string;
  ticker: string;
  icon_url?: string;
}

const Card: React.FC<CardProps> = ({name, ticker}) => {
  const imgArray = [
    'https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png',
    'https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-instagram-ini-ada-varias-dan-transparan-33.png',
    'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-6.png',
    'https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png',
    'https://www.freepnglogos.com/uploads/barcelona-png/real-club-polo-barcelona-wikipedia-23.png',
    'https://www.freepnglogos.com/uploads/linkedin-logo-transparent-picture-31.png',
    'https://www.freepnglogos.com/uploads/picture-logo-png/picture-amazon-logo-15.png',
    'https://www.freepnglogos.com/uploads/youtube-logo-png/youtube-icon-transparent-images-9.png',
    'https://www.freepnglogos.com/uploads/email-png/email-logo-communications-brands-and-logotypes-gmail-14.png',
    'https://www.freepnglogos.com/uploads/snapchat-social-logo-png-23.png',
    'https://www.freepnglogos.com/uploads/twitter-x-logo-png/twitter-x-logo-png-9.png',
    'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png',
    'https://www.freepnglogos.com/uploads/uber-logo-png-22.png',
    'https://www.freepnglogos.com/uploads/tik-tok-logo-png/new-tik-tok-logo-png-edigital-australia-digital-12.png',
    'https://www.freepnglogos.com/uploads/logo-chatgpt-png/chatgpt-png-9.png',
  ];

  const getRandomImage = (arr: any[]) => {
    return {uri: arr[Math.floor(Math.random() * arr.length)]};
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={getRandomImage(imgArray)} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.tickerText} numberOfLines={1}>
          {ticker}
        </Text>
        <Text style={styles.textInfo} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 165,
    height: 150,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 30,
    backgroundColor: colors.lightColor,
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  imageContainer: {
    flex: 1,
  },

  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
  },

  textInfo: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 10,
  },

  tickerText: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
});
