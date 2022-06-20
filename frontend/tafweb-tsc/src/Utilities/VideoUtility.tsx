import VideoDetail from '../Models/VideoDetail';
import cyber_01 from '../media/cyber_01.mp4';
import cyber_02 from '../media/cyber_02_reversed.mp4';
import cyber_03 from '../media/cyber_03.mp4';
import cyber_04 from '../media/cyber_04.mp4';
import space_01 from '../media/space_01_reversed.mp4';
import space_02 from '../media/space_02.mp4';
import space_03 from '../media/space_03.mp4';
import space_04 from '../media/space_04.mp4';
import space_05 from '../media/space_05.mp4';

export default class VideoUtility {
    static getVideos() : Array<VideoDetail> {
        return [
            {
                name: "cyber_01",
                video: cyber_01,
                playbackRate: .7
            },
            {
                name: "cyber_02",
                video: cyber_02,
                playbackRate: .5
            },
            {
                name: "cyber_03",
                video: cyber_03,
                playbackRate: .7
            },
            {
                name: "cyber_04",
                video: cyber_04,
                playbackRate: .6
            },
            {
                name: "space_01",
                video: space_01,
                playbackRate: .8
            },
            {
                name: "space_02",
                video: space_02,
                playbackRate: 1
            },
            {
                name: "space_03",
                video: space_03,
                playbackRate: .6
            },
            {
                name: "space_04",
                video: space_04,
                playbackRate: .8
            },
            {
                name: "space_05",
                video: space_05,
                playbackRate: 1
            },
        ]
    }
}