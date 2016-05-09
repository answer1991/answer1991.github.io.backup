/**
 * Created by Joe on 16/5/10.
 */

'use strict';

var _ = require('lodash'),
    Q = require('q'),
    FS = require("q-io/fs");

var ignoreFiles = ['config.json', 'index.json'];

function fullPath(base, name) {
    return base + '/' + name;
}

function loadConfig(base) {
    var path = fullPath(base, 'config.json');
    return FS.stat(path)
        .then(function (stat) {
            if (stat.isFile()) {
                return FS.read(path)
                    .then(function (content) {
                        return JSON.parse(content);
                    });
            }
            else {
                return {};
            }
        });
}

function setIndex(base) {
    return FS.list(base)
        .then(function (list) {
            list = _.compact(
                _.map(list, function (file) {
                    if (!_.includes(ignoreFiles, file)) {
                        return file;
                    }
                })
            );

            // return loadConfig(base)
            //     .then(function (config) {
            //         var files = [];
            //         var directories = [];
            //
            //         var allQ = _.map(list, function (name) {
            //             return FS.stat(fullPath(base, name))
            //                 .then(function (stat) {
            //                     if (stat.isDirectory()) {
            //                         directories.push(name);
            //                     }
            //                     else if (stat.isFile()) {
            //                         files.push(name);
            //                     }
            //                 });
            //         });
            //
            //         return Q.all(allQ)
            //             .then(function () {
            //                 var index = {
            //                     directories: [],
            //                     files: []
            //                 };
            //             });
            //     });

            var files = [];
            var directories = [];

            var allQ = _.map(list, function (name) {
                return FS.stat(fullPath(base, name))
                    .then(function (stat) {
                        if (stat.isDirectory()) {
                            directories.push(name);
                        }
                        else if (stat.isFile()) {
                            files.push(name);
                        }
                    });
            });

            return Q.all(allQ)
                .then(function () {
                    var index = {
                        directories: directories,
                        files: files
                    };

                    return FS.write(fullPath(base, 'index.json'), JSON.stringify(index))
                        .then(function () {
                            var children = _.map(directories, function (directory) {
                                return fullPath(base, directory);
                            });

                            return children;
                        });
                });
        });
}

module.exports = function () {
    return setIndex('_posts')
        .then(function (children) {
            return Q.all(
                _.map(children, function (directory) {
                    return setIndex(directory);
                })
            );
        });
};