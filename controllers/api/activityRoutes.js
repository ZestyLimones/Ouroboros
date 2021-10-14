const { Activity } = require('../../models');
const router = require('../homeRoutes');
const { get } = require('../homeRoutes');

router.get('/unicorns', async (req, res) => {
  try {
    const allActivities = await Activity.findAll({
      include: [
        {
          model: Activity,
          attributes: ['name'],
        },
      ],
    });
    const activities = allActivities.map((activity) =>
      activity.get({ plain: true })
    );
  } catch (err) {
    res.status(500).json(err);
  }
});
