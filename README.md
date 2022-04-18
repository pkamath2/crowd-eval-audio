# Crowd-Eval-Audio Framework

A frontend focused framework to setup and conduct perceptual listening tests on crowdsourced platforms such as Amazon's Mechanical Turk.  

```json
{
    "experiment_name": "exp2",  // Unique Experiment Name
    "url_base": "ui/pitched",  // Url Base. Your experiment will be located at https://<your domain>/ui/pitched/index.html
    "ui_levels": [  // Different levels on the listening test interface. Should match with level names
        "overview",
        "consent",
        "task",
        "post_survey",
        "thanks"
    ],
    "ui_levels_names": [ // Different levels on the listening test interface. Should match with levels above.
        "Overview",
        "Consent",
        "Listening Test",
        "Post Test Survey",
        "Thank you"
    ],
    "task_config": {
        "num_tasks": 1, // Number of tasks. You can build one task interface and loop multiple samples. 
        "order_random": true, // If true samples below are randomly presented. 
        "task_config": {
            "num_tasks": 1,
            "order_random": false,
            "audio_samples": {
                "task_1": {
                    "task_id": "pitched_fm",
                    "ref1_url": "https://...",
                    "audio_1_url": "https://...",
                    "...": "..."
                }
            }
        }
    },
    "save_worker_api": "<AWS Lambda Gateway API URL>", // AWS Lambda API. If left blank, API call is skipped. 
    "instruction_video_url": "" // Instruction video appears on the Overview page. If left blank, not shown.
} 


```

This codebase has the following structure - 

* [ui/](./ui)
    * [src/](./ui/src)
    * [assets/](./ui/src/assets)
    * [components/](./ui/src/components)
    * [config/](./ui/src/config)
        * [experiment-config.json](./ui/src/config/experiment-config.json)
    * [build.sh](./ui/build.sh)