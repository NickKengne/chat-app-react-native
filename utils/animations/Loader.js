import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
    Easing
} from 'react-native-reanimated';
import Colors from '../../constants/Colors';

export default function Loader() {
    const offset = useSharedValue(10);
    const offset2 = useSharedValue(0);
    const initialOffset = 10
    const duration = 500
    
    const animatedStyles_two = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value}],
    }));
    const animatedStyles_three = useAnimatedStyle(() => ({
        transform: [{ translateX: offset2.value}],
    }));

    React.useEffect(() => {
        offset.value = withRepeat(
          withSequence(
            withTiming(initialOffset, { duration, easing: Easing.cubic }),
            withTiming(0, { duration, easing: Easing.ease }),
            withTiming(-initialOffset, { duration, easing: Easing.cubic }),
          ),
          -1,
          true
        );
      }, []);
    React.useEffect(() => {
        offset2.value = withRepeat(
          withSequence(
            withTiming(-initialOffset, { duration, easing: Easing.cubic }),
            withTiming(0, { duration, easing: Easing.ease }),
            withTiming(-initialOffset, { duration, easing: Easing.cubic }),
          ),
          -1,
          true
        );
      }, []);

    return (
        <View style={{
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"row",
            width: 0,
            gap: -5.5
        }}>
            <Animated.View style={[styles.boxthree, animatedStyles_three]} />
            <Animated.View style={[styles.boxTwo, animatedStyles_two]} />
        </View>
    );
}

const styles = StyleSheet.create({
    boxthree: {
        height: 15,
        width: 15,
        backgroundColor: Colors.primary,
        borderRadius: 99999,
    },
    boxTwo: {
        height: 15,
        width: 15,
        backgroundColor: Colors.secondary,
        borderRadius: 99999,
    },
});
