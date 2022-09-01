# How to generate and apply patches with git?

It sometimes happen you need change code on a machine from which you cannot push to the repo.
You’re ready to copy/paste what `diff` outputs to your local working copy.

You think there must be a better way to proceed and you’re right. It’s a simple 2 steps process:

**1\. Generate the patch:**
```bash
git diff > some-changes.patch
```

**2\. Apply the diff:**

Then copy this patch to your local machine, and apply it to your local working copy with:
```bash
git apply /path/to/some-changes.patch
```

And that’s it! The changes are now in your working copy and ready to be staged/commit/pushed :)
