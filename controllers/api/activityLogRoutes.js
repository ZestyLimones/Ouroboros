const router = require('express').Router();
const { ActivityLog } = require('../../models');

router.post('/', async (req, res) => {
  const newActivities = [];
  req.body.activityArray.forEach((element) => {
    newActivities.push({
      user_id: req.session.user_id,
      date: req.body.entryDate,
      activity_id: element,
      daily_log_id: req.body.daily_log_id,
      public_allowed: req.body.publicFeed,
    });
  });
  try {
    const activityLogData = await ActivityLog.bulkCreate(newActivities);
    res.status(201).json(activityLogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:limit', async (req, res) => {
  try {
    const activityLogData = await ActivityLog.findAll({
      limit: req.params.count,
    });
    const activityLog = activityLogData.get({ plain: true });
    res.status(200).json(activityLog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/change-like/:id', async (req, res) => {
  ActivityLog.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updatedActivityLog) => res.json(updatedActivityLog))
    .catch((err) => res.status(500).json(err));
});

router.get('/activity-count/:id', async (req, res) => {
  try {
    const activityCount = await ActivityLog.count({
      distinct: 'id',
      where: {
        activity_id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(activityCount);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
