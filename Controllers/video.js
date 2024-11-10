const Video = require('../Modals/video');

exports.uploadVideo = async (req, res) => {
    console.log("In uploadVideo Function");
    try {
        const { title, description, videoLink, videoType, thumbnail } = req.body;
        console.log("Received data:", { title, description, videoLink, videoType, thumbnail });

        const videoUpload = new Video({ user: req.user._id, title, description, videoLink, videoType, thumbnail });
        await videoUpload.save();
        console.log("Video uploaded successfully:", videoUpload);

        res.status(201).json({ success: true, videoUpload });
    } catch (error) {
        console.error("Error in uploadVideo:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllVideo = async (req, res) => {
    console.log("In getAllVideo Function");
    try {
        const videos = await Video.find().populate('user', 'name profilePic').select('title thumbnail duration views');
        console.log("Videos found:", videos);

        res.status(200).json({ success: true, videos });
    } catch (error) {
        console.error("Error in getAllVideo:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getVideoById = async (req, res) => {
    console.log("In getVideoById Function");
    try {
        const { id } = req.params;
        console.log("Received video ID:", id);

        const video = await Video.findById(id).populate('user', 'name profilePic');
        if (!video) {
            console.log("Video not found for ID:", id);
            return res.status(404).json({ error: 'Video not found' });
        }
        console.log("Video found:", video);

        res.status(200).json({ success: true, video });
    } catch (error) {
        console.error("Error in getVideoById:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllVideoByUserID = async (req, res) => {
    console.log("In getAllVideoByUserID Function");
    try {
        const { userId } = req.params;
        console.log("Received user ID:", userId);

        const videos = await Video.find({ user: userId }).populate('user', 'name profilePic userName createdAt about');
        console.log("Videos found:", videos);

        res.status(200).json({ success: true, videos });
    } catch (error) {
        console.error("Error in getAllVideoByUserID:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.toggleLikeDislike = async (req, res) => {
    console.log("In toggleLikeDislike Function");
    const { id: videoId } = req.params;
    const userId = req.user._id;
    const { action } = req.query;
    console.log(`Video ID: ${videoId}, User ID: ${userId}, Action: ${action}`);

    try {
        const video = await Video.findById(videoId);
        if (!video) {
            console.log("Video not found for ID:", videoId);
            return res.status(404).json({ error: 'Video not found' });
        }
        console.log("Video found:", video);

        if (!Array.isArray(video.like)) video.like = [];
        if (!Array.isArray(video.dislike)) video.dislike = [];

        if (action === "like") {
            if (video.like.includes(userId)) {
                video.like.pull(userId);
                console.log("User removed from likes:", userId);
            } else {
                video.like.push(userId);
                video.dislike.pull(userId);
                console.log("User added to likes and removed from dislikes:", userId);
            }
        } else if (action === "dislike") {
            if (video.dislike.includes(userId)) {
                video.dislike.pull(userId);
                console.log("User removed from dislikes:", userId);
            } else {
                video.dislike.push(userId);
                video.like.pull(userId);
                console.log("User added to dislikes and removed from likes:", userId);
            }
        } else {
            console.log("Invalid action:", action);
            return res.status(400).json({ error: "Invalid action" });
        }

        await video.save();
        console.log("Video updated successfully:", video);

        res.status(200).json({ like: video.like.length, dislike: video.dislike.length });
    } catch (error) {
        console.error("Error in toggleLikeDislike:", error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.incrementViews = async (req, res) => {
    console.log("In incrementViews Function");
    try {
        const { id } = req.params;
        console.log("Received video ID:", id);

        const video = await Video.findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true });
        if (!video) {
            console.log("Video not found for ID:", id);
            return res.status(404).json({ error: 'Video not found' });
        }
        console.log("Views incremented for video:", video);

        res.status(200).json({ success: true, views: video.views });
    } catch (error) {
        console.error("Error in incrementViews:", error);
        res.status(500).json({ error: 'Server error' });
    }
};