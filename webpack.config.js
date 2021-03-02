module: {
    rules: [
        {
            test: /\.(jpe?g|gif|png|svg)$/i,
            use: [
                {
                    loader: 'url-loader',
                    option: {
                        limit: 1000
                    }
                }
            ]
        }
    ]
}