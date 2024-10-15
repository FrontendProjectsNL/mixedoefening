<div className="flex gap-1 items-center">
  <Dialog>
    <DialogTrigger>
      <MessageCircle className="w-5 h-5 cursor-pointer" />
    </DialogTrigger>
    {isSubscribed && (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-[350px] rounded-md p-4">
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}

          {post.comments.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-zinc-400">No comments yet</p>
            </div>
          )}
        </ScrollArea>

        <form onSubmit={handleCommentSubmission}>
          <Input
            placeholder="Add a comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />

          <DialogFooter>
            <Button type="submit" className="mt-4" disabled={isCommenting}>
              {isCommenting ? 'Commenting...' : 'Comment'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    )}
  </Dialog>
  <div className="flex gap-1 items-center">
    <span className="text-xs text-zinc-400 tracking-tighter">
      {post.comments.length > 0 ? post.comments.length : 0}
    </span>
  </div>
</div>;
