import VideoDetail from '../Models/VideoDetail';
import cyber_01 from '../media/cyber_01.mp4';
import cyber_02 from '../media/cyber_02.mp4';
import cyber_03 from '../media/cyber_03.mp4';
import cyber_04 from '../media/cyber_04.mp4';
import cyber_05 from '../media/cyber_05.mp4';
import space_01 from '../media/space_01.mp4';
import space_02 from '../media/space_02.mp4';
import space_03 from '../media/space_03.mp4';
import space_04 from '../media/space_04.mp4';
import space_05 from '../media/space_05.mp4';
import space_06 from '../media/space_06.mp4';

export default class VideoUtility {
    static getVideos() : Array<VideoDetail> {
        return [
            {
                name: "cyber_01",
                video: cyber_01,
                playspeed: 1
            },
            {
                name: "cyber_02",
                video: cyber_02,
                playspeed: 1
            },
            {
                name: "cyber_03",
                video: cyber_03,
                playspeed: 1
            },
            {
                name: "cyber_04",
                video: cyber_04,
                playspeed: 1
            },
            {
                name: "cyber_05",
                video: cyber_05,
                playspeed: 1
            },
            {
                name: "space_01",
                video: space_01,
                playspeed: 1
            },
            {
                name: "space_02",
                video: space_02,
                playspeed: 1
            },
            {
                name: "space_03",
                video: space_03,
                playspeed: 1
            },
            {
                name: "space_04",
                video: space_04,
                playspeed: 1
            },
            {
                name: "space_05",
                video: space_05,
                playspeed: 1
            },
            {
                name: "space_06",
                video: space_06,
                playspeed: 1
            },
        ]
    }
}