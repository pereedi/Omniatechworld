import { useState, useRef, useEffect, useCallback } from 'react';

export function useVideoPlayer(chapters = []) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(29);
  const [duration, setDuration] = useState(105);
  const [activeChapter, setActiveChapter] = useState(0);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Video playback was interrupted or prevented:", err);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration && !isNaN(video.duration)) {
      setDuration(video.duration);
    }
  }, []);

  const seek = useCallback((e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = pos * (video.duration || 105);
    setCurrentTime(video.currentTime);
  }, []);

  const setChapter = useCallback((index) => {
    const video = videoRef.current;
    setActiveChapter(index);
    if (!video) return;
    video.pause();
    setIsPlaying(false);
    if (chapters[index]?.poster) {
      video.poster = chapters[index].poster;
    }
    video.currentTime = 0;
    setCurrentTime(0);
  }, [chapters]);

  // Format mm:ss
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return {
    videoRef,
    isPlaying,
    isMuted,
    currentTime,
    duration,
    activeChapter,
    progressPercent,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    handleTimeUpdate,
    handleLoadedMetadata,
    seek,
    setChapter,
    formatTime,
  };
}
