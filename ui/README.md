# Crowd-Eval-Audio Framework Web Interface

A frontend focused framework to setup and conduct perceptual listening tests on crowdsourced platforms such as Amazon's Mechanical Turk.  

This framework used in conjunction with the External API on Mechanical Turk provides an configurable, multi-page, intuitive listening test interface for participants. 

## Setup

To install dependencies and run locally, run the following in the ```ui``` folder - 

```bash
npm install
```

## Directory Structure
This web interface has the following structure. We use Vite (https://vitejs.dev/) for development and builds.

* [src/](./src)
    * [assets/](./src/assets) # Static assets
    * [components/](./src/components) # All UI components. Note the naming convention - the directory names are '\<experiment_name\>/Task.vue' for experiment specific tasks. '\<experiment_name\>' is set in [experiment-config.json](./src/config/experiment-config.json)
    * [config/](./src/config)
        * [experiment-config.json](./src/config/experiment-config.json) # Config for the experiment. See [configuration section](/#configuration)
    * [asset-imports.js](./src/asset-imports.js) # If you have sample audio files under assets import them through this file and reference anywhere in your code. This is needed for Vite to bundle them during final deployment. 
    * [build.sh](./build.sh) # Builds the final deployable version into /dist directory. Static js/htmls can be pushed to S3 or any other CDN.
* [dist/](./dist) # Final deployable version. Sub-folders created based on ```url_base``` in ```experiment-config.json``` file.

## Development

This framework presents a multi-page layout for Mechanical Turk experiments. Note that the term 'page' here is used figuratively, this app is a SPA. Each page is defined as a component and can be configured using ```experiment-config.json```. 

For e.g., the 'Overview' and 'Post Test Survey' pages are sourced from Overview.vue and PostSurvey.vue respectively. The audio listening trials can be outlined in Task.vue under the directory indicating the experiment name. For e.g., if ```experiment_name``` is ```exp2```, the interface searches for Task.vue under ```./src/components/exp2```.

To run interface locally (few experiments are setup for ease of development and test) - 

```bash
npm run dev
```
Navigate to http://localhost:3000 (preferably on Chrome or Firefox).


## Configuration
See below for some details on individual config line items. Also find some more sample configuration files under [sample-config](./src/config/sample-config/)   
```
{
    "experiment_name": "exp2",  # An unique Experiment Name
    "url_base": "ui/pitched",  # Url Base. Your experiment will be located at https://<your CDN or domain>.com/ui/pitched/index.html
    "ui_levels": [  # Different levels on the listening test interface. Should match with level names
        "overview",
        "consent",
        "task",
        "post_survey",
        "thanks"
    ],
    "ui_levels_names": [ # Different levels on the listening test interface. Should match with levels above. Each level has a .vue file under components.
        "Overview",
        "Consent",
        "Listening Test",
        "Post Test Survey",
        "Thank you"
    ],
    "task_config": {
        "num_tasks": 1, # Number of tasks. You can build one task interface and loop multiple samples. 
        "order_random": true, # If true samples below are randomly presented. 
        "task_config": {
            "num_tasks": 2, # Indicates there are two trials each participant has to complete.
            "order_random": false,
            "audio_samples": { #task_1, task_2 are different samples needed by each individual trial.
                "task_1": {
                    "task_id": "pitched_fm",
                    "ref1_url": "https://...",
                    "audio_1_url": "https://...",
                    "...": "..."
                },
                "task_2": {
                    "task_id": "pitched_fm",
                    "ref1_url": "https://...",
                    "audio_1_url": "https://...",
                    "...": "..."
                }
            }
        }
    },
    "save_worker_api": "<AWS Lambda Gateway API URL>", # AWS Lambda API to check if participant has attempted this task previously. We can programatically disallow them from reattempting. If left blank, API call is skipped. 
    "instruction_video_url": "" # Instruction video appears on the Overview page. If left blank, not shown.
} 
```

# Deployment

We use Vite to build final *.js and *.htmls. Update the ```build.sh``` with the right config and execute - 

```bash
./build.sh
```

The resources are built under the ```./dist``` directory.