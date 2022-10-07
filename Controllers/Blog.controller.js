import PostModel from "../models/posts.model.js";

// Dinge, die es nicht gibt:
class BlogController{

    static async create(req, res){
        try{
            const post = {
                image: req.file.path,
                songlink: req.body.songlink,
                text: req.body.text,
            }
            const newPost = new PostModel(post);
            await newPost.save();
            res.status(201).json({message: "post wurde gepostet, sehr geil"})
        } catch (e){
            console.log("ein Fehler im Server, brudda", e);
            res.status(500).json({message: "es ist ein Fehler beim post erstellen", error: e});
        }
    }

    static async getAll(req, res){
        try{
            const posts = await PostModel.find();
            console.log("posts @ server getall", posts);
            res.status(200).json({posts: posts, message: "isch hab hier was gefunden bro"});
        } catch (e){
            console.log("ein Fehler im Server, brudda", e);
            res.status(500).json({message: "es ist ein Fehler beim posts lesen", error: e});
        }
    }
}

export default BlogController;