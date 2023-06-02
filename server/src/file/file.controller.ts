import path from 'path';
import fs from 'fs';
import { Next } from 'koa';
import _ from 'lodash';
import { createFile, findFileById } from './file.service';

/**
 * 上传文件
 */
export const store = async (ctx: any, next: Next) => {
    // 当前用户
    const { id: userId } = ctx.request.user;

    // 所属内容
    const { post: postId } = ctx.request.query;

    // 文件信息
    const fileInfo = _.pick(ctx.request.file, [
        'originalname',
        'mimetype',
        'filename',
        'size',
    ]);
    try {
        // 保存文件信息
        const data = await createFile({
            ...fileInfo,
            userId,
            postId: parseInt(`${postId}`, 10),
            ...ctx.request.fileMetaData,
        });
        // 做出响应
        ctx.response.status(201).send(data);
    } catch (error) {
        console.error(error);
    }
    await next()
}
/**
 * 文件服务
 */
export const serve = async (ctx: any, next: Next) => {
    // 从地址参数里得到文件 ID
    const { fileId } = ctx.request.params;

    try {
        // 查找文件信息
        const file = await findFileById(parseInt(fileId, 10));

        // 要提供的图像尺寸
        const { size } = ctx.request.query;

        // 文件名与目录
        let filename = file.filename;
        let root = 'uploads';
        let resized = 'resized';

        if (size) {
            // 可用的图像尺寸
            const imageSizes = ['large', 'medium', 'thumbnail'];

            // 检查文件尺寸是否可用
            if (!imageSizes.some(item => item == size)) {
                throw new Error('FILE_NOT_FOUND');
            }

            // 检查文件是否存在
            const fileExist = fs.existsSync(
                path.join(root, resized, `${filename}-${size}`),
            );

            // 设置文件名与目录
            if (fileExist) {
                filename = `${filename}-${size}`;
                root = path.join(root, resized);
            }
        }

        // 做出响应
        ctx.response.sendFile(filename, {
            root,
            headers: {
                'Content-Type': file.mimetype,
            },
        });
    } catch (error) {

    }
}
/**
 * 文件信息
 */
export const metadata = async (ctx: any, next: Next) => {
    // 文件 ID
    const { fileId } = ctx.request.params;

    try {
        // 查询文件数据
        const file = await findFileById(parseInt(fileId, 10));

        // 准备响应数据
        const data = _.pick(file, ['id', 'size', 'width', 'height', 'metadata']);

        // 做出响应
        ctx.response.send(data);
    } catch (error) {

    }
};
