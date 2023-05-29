import { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Image, Alert } from "react-native";
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
  VideoQuality,
} from "expo-camera";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { runOnJS, useSharedValue, withTiming } from "react-native-reanimated";

import styles from "./styles";
import { useAppNavigation } from "../../types/navigation";
import Close from "../../../assets/icons/Close";
import Flash from "../../../assets/icons/Flash";
import FlipCamera from "../../../assets/icons/FlipCamera";
import CircleButton from "./CircleButton";
import { STORY_DURATION, flashModeToIcon, flashModes } from "../../constants";
import TypesSlider from "./TypesSlider";

const CameraScreen = () => {
  const insets = useSafeAreaInsets();
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const progress = useSharedValue(1);
  const camera = useRef<Camera>(null);
  const navigation = useAppNavigation();

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microfonPermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === "granted" &&
          microfonPermission.status === "granted"
      );
    };
    getPermission();
  }, []);

  const flipCamera = () =>
    setCameraType((prevType) =>
      prevType === CameraType.back ? CameraType.front : CameraType.back
    );

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) return;
    const options: CameraPictureOptions = {
      quality: 0,
    };
    const result = await camera.current.takePictureAsync(options);
    navigation.navigate("Create", {
      type: "image",
      uri: result.uri,
    });
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) return;
    const options: CameraRecordingOptions = {
      quality: VideoQuality["480p"],
      maxDuration: 10,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    progress.value = 0;
    progress.value = withTiming(
      1,
      { duration: STORY_DURATION },
      (isFinished) => {
        if (isFinished) {
          runOnJS(stopRecording)();
        }
      }
    );
    try {
      const result = await camera.current.recordAsync(options);
      navigation.navigate("Create", {
        type: "video",
        uri: result.uri,
      });
    } catch (error) {
      Alert.alert("Recording video error");
    }
  };
  const stopRecording = async () => {
    if (isRecording) {
      camera.current?.stopRecording();
      progress.value = 1;
      setIsRecording(false);
    }
  };

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View
        style={[
          styles.buttonTopContainer,
          styles.buttonContainer,
          { top: insets.top },
        ]}
      >
        <Pressable onPress={navigation.goBack} style={styles.buttonIcon}>
          <Close />
        </Pressable>
        <Pressable onPress={flipFlash} style={styles.buttonIcon}>
          <Flash {...flashModeToIcon[flash]} />
        </Pressable>
      </View>
      {isCameraReady && (
        <Pressable
          style={styles.circleButtonContainer}
          onPress={takePicture}
          onLongPress={startRecording}
          onPressOut={stopRecording}
        >
          <CircleButton
            progress={progress}
            isRecording={isRecording}
            style={styles.circleButton}
          />
        </Pressable>
      )}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonIcon}>
          <Image
            source={require("../../../assets/images/avatar_1.jpg")}
            style={styles.avatar}
          />
        </View>
        <TypesSlider />
        <Pressable onPress={flipCamera} style={styles.buttonIcon}>
          <FlipCamera />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraScreen;
