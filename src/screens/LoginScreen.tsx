import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import {
  Layout,
  Text,
  Button,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import Image = Animated.Image;

// 模拟图片资源（实际项目中替换为真实路径）

export const LoginScreen = () => {
  const theme = useTheme(); // 获取UI Kitten主题
  const avatar1 = require('../assets/avatar1.png');
  const avatar2 = require('../assets/avatar2.png');
  const avatar3 = require('../assets/avatar3.png');
  return (
    <Layout style={styles.container} level="1">
      {/* 头像层叠区域 */}
      <Layout style={styles.avatarsContainer}>
        <Image
          source={avatar1}
          style={[styles.avatar, styles.largeAvatar]}
          resizeMode="cover"
        />
        <Image
          source={avatar2}
          style={[styles.avatar, styles.mediumAvatar]}
          resizeMode="cover"
        />
        <Image
          source={avatar3}
          style={[styles.avatar, styles.smallAvatar]}
          resizeMode="cover"
        />
      </Layout>

      {/* 标题文本 */}
      <Text style={styles.title} category="h4" status="primary">
        开始找您的聊天搭子
      </Text>

      {/* 手机号登录按钮 */}
      <Button
        style={styles.loginButton}
        appearance="filled"
        status="primary"
        accessoryLeft = {
          <Icon  name="phone" pack="eva" width={24} height={24} />
        }
      />
      {/* 注册提示 */}
      <Layout style={styles.registerContainer}>
        <Text category="p2" style={styles.registerText}>
          还没有账号？
          <Text style={styles.registerLink} status="primary">
            注册
          </Text>
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF', // 浅蓝色背景
  },
  avatarsContainer: {
    position: 'relative',
    top: 80,
    width: '100%',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 100, // 圆形头像
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  largeAvatar: {
    width: 120,
    height: 120,
    marginBottom: -40,
    zIndex: 3,
  },
  mediumAvatar: {
    width: 90,
    height: 90,
    marginLeft: 80,
    marginTop: 20,
    zIndex: 2,
  },
  smallAvatar: {
    width: 60,
    height: 60,
    marginRight: 100,
    marginTop: -30,
    zIndex: 1,
  },
  title: {
    marginVertical: 40,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '100%',
    borderRadius: 25,
    paddingVertical: 8,
  },
  registerContainer: {
    marginTop: 24,
  },
  registerText: {
    color: '#666',
  },
  registerLink: {
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});