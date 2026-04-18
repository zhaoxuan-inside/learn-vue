// mitt-1: pnpm install mitt 安装 mitt

// mitt-2: 导入mitt
import mitt from 'mitt';

// mitt-3: 定义事件类型
type Events = {
    game: string;
};

// mitt-4： 定义通信总线
const bus = mitt<Events>();

// mitt-5: 将总线公布出去
export default bus;
