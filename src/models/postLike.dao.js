import { pool } from '../../config/database.js';
import { likeWhether,addLike,deleteLike } from './postLike.sql.js';

export const userLike = async(user_id,post_id)=>{
  try{
    const postId = parseInt(post_id, 10);
    const userId = parseInt(user_id, 10);
    const conn = await pool.getConnection();
    const [like] =await pool.query(likeWhether,[postId, userId])
    if(like.length === 0){
      await pool.query(addLike,[postId, userId])
      console.log('좋아요 추가');
    }else {
    await pool.query(deleteLike,[postId, userId])
    console.log('좋아요 취소');
    }
    conn.release(); // 연결 해제

  }catch(err){
    console.log(`좋아요 저장 실패 ${err.message}`)
  }
}