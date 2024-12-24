const User = require('../Modals/user');
const Video = require('../Modals/video');
const Playlist = require('../Modals/playlist');

exports.createPlaylist = async (req, res) => {
  try {
    const { name, visibility, collaborate } = req.body;
    const userId = req.user.userId;

    const existingPlaylist = await Playlist.findOne({ title: name });
    if (existingPlaylist) {
      return res.status(400).json({ error: 'A playlist with this title already exists' });
    }

    const newPlaylist = new Playlist({
      user: userId,
      title: name,
      visibility,
      collaborate
    });

    await newPlaylist.save();
    await User.findByIdAndUpdate(userId, { $push: { playlists: newPlaylist._id } });

    res.status(201).json({ success: true, playlist: newPlaylist });
  } catch (error) {
    console.error("Error creating playlist:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addVideoToPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { videoId } = req.body;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    playlist.videos.push(videoId);
    await playlist.save();

    res.status(200).json({ success: true, playlist });
  } catch (error) {
    console.error("Error adding video to playlist:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.removeVideoFromPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { videoId } = req.body;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    playlist.videos.pull(videoId);
    await playlist.save();

    res.status(200).json({ success: true, playlist });
  } catch (error) {
    console.error("Error removing video from playlist:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserPlaylists = async (req, res) => {
  try {
    const userId = req.user.userId;
    const playlists = await Playlist.find({ user: userId }).populate('videos');

    res.status(200).json({ success: true, playlists });
  } catch (error) {
    console.error("Error fetching user playlists:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addCollaborator = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { collaboratorId } = req.body;
    const userId = req.user.userId;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    if (playlist.user.toString() !== userId.toString() && !playlist.collaborators.includes(userId)) {
      return res.status(403).json({ error: 'You do not have permission to add collaborators to this playlist' });
    }

    playlist.collaborators.push(collaboratorId);
    await playlist.save();

    res.status(200).json({ success: true, playlist });
  } catch (error) {
    console.error("Error adding collaborator:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.removeCollaborator = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { collaboratorId } = req.body;
    const userId = req.user.userId;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    if (playlist.user.toString() !== userId.toString() && !playlist.collaborators.includes(userId)) {
      return res.status(403).json({ error: 'You do not have permission to remove collaborators from this playlist' });
    }

    playlist.collaborators.pull(collaboratorId);
    await playlist.save();

    res.status(200).json({ success: true, playlist });
  } catch (error) {
    console.error("Error removing collaborator:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updatePlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { collaborate } = req.body;
    const userId = req.user.userId;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    if (playlist.user.toString() !== userId.toString() && !playlist.collaborators.includes(userId)) {
      return res.status(403).json({ error: 'You do not have permission to update this playlist' });
    }

    playlist.collaborate = collaborate;
    await playlist.save();

    res.status(200).json({ success: true, playlist });
  } catch (error) {
    console.error("Error updating playlist:", error);
    res.status(500).json({ error: 'Server error' });
  }
};
exports.deletePlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const userId = req.user.userId;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    if (playlist.user.toString() !== userId.toString()) {
      return res.status(403).json({ error: 'You do not have permission to delete this playlist' });
    }

    await Playlist.findByIdAndDelete(playlistId);
    await User.findByIdAndUpdate(userId, { $pull: { playlists: playlistId } });

    res.status(200).json({ success: true, message: 'Playlist deleted successfully' });
  } catch (error) {
    console.error("Error deleting playlist:", error);
    res.status(500).json({ error: 'Server error' });
  }
};