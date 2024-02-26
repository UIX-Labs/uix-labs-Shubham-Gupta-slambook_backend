
app.delete('/slambook/:id', async (req, res) => {
  try {
    const deletedEntry = await SlamBook.findByIdAndDelete(req.params.id);
    if (deletedEntry) {
      res.status(200).json({ message: 'Entry Deleted' });
    } else {
      res.status(404).json({ message: 'Entry not found' });
    }
  } catch (error) {
    console.error('Error deleting slambook entry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
